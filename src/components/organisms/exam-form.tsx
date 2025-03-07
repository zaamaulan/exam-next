'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useExam } from '@/hooks/use-exam'

const formSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      answer: z.string({ required_error: 'Answer is required' }),
    }),
  ),
})

export const ExamForm = ({ id }: { id: string }) => {
  const { data: exam } = useExam({ id, include: true })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    shouldUnregister: false,
    defaultValues: {
      answers: [],
    },
  })
  console.log(form.getValues('answers'))
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {exam?.questions.map((question, index) => (
          <FormField
            key={question.id}
            control={form.control}
            name={`answers.${index}.answer`}
            render={({ field }) => (
              <FormItem>
                <input type="hidden" {...form.register(`answers.${index}.questionId`)} value={question.id} />
                <FormLabel>{question.content}</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    {question.options.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem id={option.id} value={option.id} />
                        <Label htmlFor={option.id}>{option.content}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
