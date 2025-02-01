import { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Calendar from '.'

type StoryProps = ComponentProps<typeof Calendar>

const meta: Meta<StoryProps> = {
    component: Calendar,
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
    args: {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
    },
}
