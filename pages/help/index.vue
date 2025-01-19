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
    title: "1. Qu'est-ce que Wytness ?",
    content: "Wytness est une plateforme d'automatisation permettant de connecter différentes applications et services pour automatiser des actions. Inspirée de services comme IFTTT et Zapier, Wytness vous permet de créer des scénarios où une action dans un service déclenche une réaction dans un autre."
  },
  {
    value: 'item-2',
    title: "2. Comment fonctionnent les Actions et REActions sur Wytness ?",
    content: "Les Actions sont des événements ou conditions qui se produisent dans un service, comme la réception d'un message ou la création d'un fichier. Une REAction est ce qui se passe en réponse à cette Action, comme envoyer un message ou stocker un fichier. Vous pouvez configurer des AREA pour lier une Action et une REAction et automatiser ces processus."
  },
  {
    value: 'item-3',
    title: "3. Qu'est-ce qu'un Workflow dans Wytness ?",
    content: "Un workflow est une automatisation qui consiste à relier une Action (par exemple, la réception d'un message dans Gmail) à une REAction (comme stocker une pièce jointe dans OneDrive). Vous pouvez configurer plusieurs workflows pour personnaliser vos automatisations."
  },
  {
    value: 'item-4',
    title: "4. Est-ce que mes données sont sécurisées sur Wytness ?",
    content: "Oui, la sécurité de vos données est une priorité pour nous. Nous utilisons des protocoles sécurisés pour le stockage et la transmission de vos informations. De plus, l'authentification OAuth2 vous permet de connecter vos services tiers de manière sécurisée sans avoir à partager vos informations sensibles."
  },
  {
    value: 'item-5',
    title: "5. Est-ce que Wytness est accessible pour les personnes en situation de handicap ?",
    content: "Oui, nous avons pris soin de suivre les lignes directrices d'accessibilité afin de rendre notre plateforme utilisable par le plus grand nombre, y compris les personnes en situation de handicap. Nous encourageons l'utilisation de notre plateforme avec des outils d'assistance tels que les lecteurs d'écran."
  },
  {
    value: 'item-6',
    title: "6. Puis-je utiliser Wytness sur mon téléphone mobile ?",
    content: "Oui, Wytness dispose d'une application disponible sur l'AppStore et le PlayStore qui vous permet de gérer vos automatisations et d'interagir avec vos services directement depuis votre téléphone."
  },
  {
    value: 'item-7',
    title: "7. Que faire si un service que j'utilise n'est pas encore disponible sur Wytness ?",
    content: "Si un service que vous utilisez n'est pas encore intégré à Wytness, nous vous encourageons à nous en faire part via notre support. Nous travaillons régulièrement à l'ajout de nouveaux services à la plateforme. Un système de MarketPlace sera mit en place prochainement, vous pourrez alors créer vos propres services."
  },
  {
    value: 'item-8',
    title: "8. Comment puis-je gérer mes automatisations sur Wytness ?",
    content: "Vous pouvez facilement gérer vos automatisations via le tableau de bord de votre compte. Vous pouvez ajouter, modifier ou supprimer des AREA à tout moment pour personnaliser les automatisations selon vos besoins."
  },
  {
    value: 'item-9',
    title: "9. Comment Wytness protège-t-il ma vie privée ?",
    content: "Nous accordons une grande importance à la confidentialité de vos informations. Toutes les données personnelles que vous partagez sont cryptées et utilisées uniquement pour les fins de l'application. Nous nous engageons à ne jamais partager vos informations sans votre consentement."
  },
  {
    value: 'item-10',
    title: "10. Y a-t-il une limite au nombre d'Actions ou REActions que je peux créer ?",
    content: "Non, il n'y a pas de limite stricte au nombre d'Actions ou de REActions que vous pouvez configurer. Cependant, des limites peuvent s'appliquer en fonction des services connectés ou de votre plan d'abonnement."
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