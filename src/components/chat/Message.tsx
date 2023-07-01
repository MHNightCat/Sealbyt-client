'use client';
import {
  Card,
  Avatar,
  ScrollArea,
  Stack,
  Divider,
  Center,
  Text,
  Alert,
} from '@mantine/core';
import { Metadata } from 'next';
import { useEffect, useRef, useState } from 'react';
import { TiWarningOutline } from 'react-icons/ti';
import ChatBoxComponents from './Box';
import GetMessage from '@/function/Get/GetMessage';

export default function ChatMessagesComponents({ id }: { id: string }) {
  console.log(id);
  const [messages, setMessages] = useState<any[]>([]);
  const [LastTime, setLastTime] = useState(0);
  const [LastUser, setLastUser] = useState('');
  useEffect(() => {
    async function getMessages() {
      const rooms_data = await GetMessage(id, 50);
      setMessages(rooms_data.data.reverse());
    }
    getMessages();
  }, []);
  return (
    <ChatBoxComponents>
      <Divider
        my="sx"
        label="2023年12月31日"
        labelPosition="center"
        size="sm"
      />
      {messages.length === 0 ? (
        <></>
      ) : (
        messages.map((message_data) => (
          <>
            {message_data.create_at - LastTime > 10 * 60 * 1000 ? (
              <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
                <Avatar color="cyan" radius="xl" size="md">
                  MK
                </Avatar>
                <div>
                  <div className="flex content-end  ml-1 -mt-1.5">
                    <Text size="md" className="mr-1 self-end" color="gray.1">
                      Username
                    </Text>
                    <Text size="xs" color="gray.7" className="mr-1 self-end">
                      Today 19:20
                    </Text>
                  </div>
                  <Text size="sm" color="gray.3" className="ml-1">
                    This is a message.
                  </Text>
                </div>
              </div>
            ) : (
              <>
                <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
                  <Text size="sm" color="gray.3" className="ml-[42px]">
                    This is a message.
                  </Text>
                </div>
              </>
            )}
            {setLastTime(message_data.create_at)}
          </>
        ))
      )}
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg">
          <Avatar color="cyan" radius="xl" size="md">
            MK
          </Avatar>
          <div>
            <div className="flex content-end  ml-1 -mt-1.5">
              <Text size="md" className="mr-1 self-end" color="gray.1">
                Username
              </Text>
              <Text size="xs" color="gray.7" className="mr-1 self-end">
                Today 19:20
              </Text>
            </div>
            <Text size="sm" color="gray.3" className="ml-1">
              This is a message.
            </Text>
          </div>
        </div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
      <div>
        <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
          <Text size="sm" color="gray.3" className="ml-[42px]">
            This is a message.
          </Text>
        </div>
      </div>
    </ChatBoxComponents>
  );
}
