servicesLength<script setup lang="ts">
  definePageMeta({
    title: "Help & Support",
    description: "Help & Support page",
    middleware: ["auth"],
    layout: "dashboard",
  });

  useHead({
    title: 'Help & Support'
  });

  const accordionItems = [
  {
    value: 'item-1',
    title: "1. What is Wytness?",
    content: "Wytness is an automation platform that connects different applications and services to automate actions. Inspired by services like IFTTT and Zapier, Wytness allows you to create scenarios where an action in one service triggers a reaction in another."
  },
  {
    value: 'item-2',
    title: "2. How do Actions and REActions work on Wytness?",
    content: "Actions are events or conditions that occur in a service, such as receiving a message or creating a file. A REAction is what happens in response to this Action, such as sending a message or storing a file. You can configure AREA to link an Action and a REAction and automate these processes."
  },
  {
    value: 'item-3',
    title: "3. What is a Workflow in Wytness?",
    content: "A workflow is an automation that connects an Action (e.g., receiving a message in Gmail) to a REAction (e.g., storing an attachment in OneDrive). You can configure multiple workflows to customize your automations."
  },
  {
    value: 'item-4',
    title: "4. Are my data secure on Wytness?",
    content: "Yes, the security of your data is a priority for us. We use secure protocols for storing and transmitting your information. Additionally, OAuth2 authentication allows you to securely connect your third-party services without sharing your sensitive information."
  },
  {
    value: 'item-5',
    title: "5. Is Wytness accessible for people with disabilities?",
    content: "Yes, we have taken care to follow accessibility guidelines to make our platform usable by the widest possible audience, including people with disabilities. We encourage the use of our platform with assistive tools such as screen readers."
  },
  {
    value: 'item-6',
    title: "6. Can I use Wytness on my mobile phone?",
    content: "Yes, Wytness has an app available on the AppStore and PlayStore that allows you to manage your automations and interact with your services directly from your phone."
  },
  {
    value: 'item-7',
    title: "7. What if a service I use is not yet available on Wytness?",
    content: "If a service you use is not yet integrated with Wytness, we encourage you to let us know via our support. We regularly work on adding new services to the platform. A Marketplace system will be implemented soon, allowing you to create your own services."
  },
  {
    value: 'item-8',
    title: "8. How can I manage my automations on Wytness?",
    content: "You can easily manage your automations via your account dashboard. You can add, modify, or delete AREA at any time to customize your automations to your needs."
  },
  {
    value: 'item-9',
    title: "9. How does Wytness protect my privacy?",
    content: "We place great importance on the privacy of your information. All personal data you share is encrypted and used only for the purposes of the application. We are committed to never sharing your information without your consent."
  },
  {
    value: 'item-10',
    title: "10. Is there a limit to the number of Actions or REActions I can create?",
    content: "No, there is no strict limit to the number of Actions or REActions you can configure. However, limits may apply depending on the connected services or your subscription plan."
  }
]
</script>

<template>
  <div class="p-5">
    <h1 class="text-5xl mt-2">Help & Support</h1>

    <div class="p-5">
      <Accordion type="single" class="w-[90%] max-[1200px]:w-full" collapsible :default-value="defaultValue">
      <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
      <AccordionTrigger>{{item.title }}</AccordionTrigger>
      <AccordionContent>
        {{item.content }}
      </AccordionContent>
      </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<style scoped>



</style>