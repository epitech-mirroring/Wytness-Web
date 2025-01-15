<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from './avatar';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { ref } from 'vue';
import { onMounted } from 'vue';

const id = ref('1');
const email = ref('m@example.com');
const name = ref('Name');
const surname = ref('surname').value.toUpperCase();
const authState = useAuthState();

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-full w-full rounded-full gap-2.5 hover:bg-transparent">
        <Avatar class="h-8 w-8">
          <AvatarImage :src="'https://api.dicebear.com/9.x/notionists/svg?seed=' + authState.user.value?.id  + '&backgroundColor=ffdfbf,ffd5dc,d1d4f9,c0aede,b6e3f4'" alt="avatar" />
        </Avatar>
        <span class="text-lg">
          {{ authState.user.value?.name }} {{ authState.user.value?.surname }}
        </span>
        <i class="fa-solid fa-chevron-down"></i>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="font-normal flex">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            {{ authState.user.value?.name }}
          </p>
          <p class="text-xs leading-none text-muted-foreground">
            {{ authState.user.value?.email }}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Log out
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>