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
  answer: z.record(z.string()), // Menggunakan record untuk menyimpan jawaban tiap pertanyaan
})

export const ExamForm = ({ id }: { id: string }) => {
  const { data: exam } = useExam({ id, include: true })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: {},
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {exam?.questions.map((question) => (
          <FormField
            key={question.id}
            control={form.control}
            name={`answer.${question.id}`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{question.content}</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    {question.options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem id={option} value={option} />
                        <Label htmlFor={option}>{option}</Label>
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
