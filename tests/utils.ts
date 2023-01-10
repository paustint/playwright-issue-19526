import { Account, Contact, SomeType } from "~types/app.types";

export interface TestCase {
  testCase: number;
  expected: number;
  account: Awaited<ReturnType<typeof getTestAccount>>;
  someType: Awaited<ReturnType<typeof getTestSomeType>>;
  contact: Awaited<ReturnType<typeof getTestContact>>;
}

export async function getTestCases1(): Promise<TestCase[]> {
  return [
    {
      testCase: 1,
      expected: 1,
      account: await getTestAccount(),
      someType: await getTestSomeType(),
      contact: await getTestContact(),
    },
    {
      testCase: 2,
      expected: 2,
      account: await getTestAccount(),
      someType: await getTestSomeType(),
      contact: await getTestContact(),
    },
  ];
}

export function getTestCases2() {
  const account: Account = {
    id: "123",
    name: "test",
  };
  const someType: SomeType = {
    someField: "test",
  };
  const contact: Contact = {
    name: "test",
    email: "test@test.com",
  };
  return [
    {
      testCase: 1,
      expected: 1,
      account,
      someType,
      contact,
    },
    {
      testCase: 2,
      expected: 2,
      account,
      someType,
      contact,
    },
  ];
}

export async function getTestCases3() {
  return [{ testCase: 1 }, { testCase: 2 }];
}

export async function getTestAccount() {
  const account: Account = {
    id: "123",
    name: "test",
  };
  return account;
}
export async function getTestSomeType() {
  const someType: SomeType = {
    someField: "test",
  };
  return someType;
}
export async function getTestContact() {
  const contact: Contact = {
    name: "test",
    email: "test@test.com",
  };
  return contact;
}
