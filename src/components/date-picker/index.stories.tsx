import { ComponentProps, useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DatePicker from '.'

type StoryProps = ComponentProps<typeof DatePicker>

const meta: Meta<StoryProps> = {
    component: DatePicker,
    argTypes: {
        value: {
            control: {
                type: 'date',
            },
        },
    },
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
    args: {
        value: new Date(),
    },
    render: (args) => {
        const [date, setDate] = useState(args.value)

        useEffect(() => {
            setDate(args.value)
        }, [args.value])

        return <DatePicker {...args} value={date} onChange={setDate} />
    },
}
