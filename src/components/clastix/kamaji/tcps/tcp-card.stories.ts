import type { Meta, StoryObj } from "@storybook/react";
import { TenantControlPlaneCard } from "./tcp-card";
import { createMockTCP } from "./tcp.mocks";

const meta: Meta<typeof TenantControlPlaneCard> = {
  title: "Clastix/Kamaji/TenantControlPlaneCard",
  component: TenantControlPlaneCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TenantControlPlaneCard>;

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
