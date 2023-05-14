import type { Meta, StoryObj } from "@storybook/react";
import { createMockTCP } from "./tcp.mocks";
import { TenantControlPlaneDetails } from "./tcp-details";

const meta: Meta<typeof TenantControlPlaneDetails> = {
  title: "Clastix/Kamaji/TenantControlPlaneDetails",
  component: TenantControlPlaneDetails,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TenantControlPlaneDetails>;

export const Ready: Story = {
  args: {
    tcp: createMockTCP("test", "Ready"),
  },
};

export const NotReady: Story = {
  args: {
    tcp: createMockTCP("test", "NotReady"),
  },
};

export const Provisioning: Story = {
  args: {
    tcp: createMockTCP("test", "Provisioning"),
  },
};
