import { ComponentProps, useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import RangePicker from '.'

type StoryProps = ComponentProps<typeof RangePicker> & {
    startDate: Date
    endDate: Date
}

const meta: Meta<StoryProps> = {
    component: RangePicker,
    argTypes: {
        startDate: {
            control: {
                type: 'date',
            },
        },
        endDate: {
            control: {
                type: 'date',
            },
        },
    },
    args: {
        onChange: fn(),
    },
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
    args: {
        startDate: new Date(),
        endDate: new Date(),
    },
    render: (args) => {
        const [rangeDates, setRangeDates] = useState<[Date, Date]>([
            args.startDate,
            args.endDate,
        ])

        useEffect(() => {
            setRangeDates([args.startDate, args.endDate])
        }, [args.startDate, args.endDate])

        const handleChange = (newRangeDates: [Date, Date]) => {
            setRangeDates(newRangeDates)
            args.onChange(newRangeDates)
        }

        return (
            <RangePicker
                {...args}
                rangeDates={rangeDates}
                onChange={handleChange}
            />
        )
    },
}

export const AmountOfMonths: Story = {
    args: {
        rangeDates: [new Date(), new Date()],
        amountOfMonths: 2,
    },
    render: (args) => {
        const [rangeDates, setRangeDates] = useState<[Date, Date]>(
            args.rangeDates
        )

        const handleChange = (newRangeDates: [Date, Date]) => {
            setRangeDates(newRangeDates)
            args.onChange(newRangeDates)
        }

        return (
            <RangePicker
                {...args}
                rangeDates={rangeDates}
                onChange={handleChange}
            />
        )
    },
}
