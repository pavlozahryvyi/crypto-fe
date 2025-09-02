import { type FC, type HTMLInputTypeAttribute } from "react";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import {
  Box,
  Button,
  Center,
  Field,
  Flex,
  Heading,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "@tanstack/react-router";
import { useSignUpMutation } from "@/api/auth/auth.queries";

const { fieldContext, formContext, useFormContext, useFieldContext } =
  createFormHookContexts();

const CustomInput: FC<{
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute | undefined;
}> = ({ label, placeholder, required, type }) => {
  const field = useFieldContext<string>();

  return (
    <Field.Root required={required} width="full">
      <Field.Label>
        {label} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        placeholder={placeholder}
        type={type}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
    </Field.Root>
  );
};

function SubmitButton({ label }: { label: string }) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button disabled={isSubmitting} type="submit">
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}

const { useAppForm } = createFormHook({
  fieldComponents: {
    Input: CustomInput,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});

export const SignUp: FC = () => {
  const navigate = useNavigate();

  const { mutate: signUp } = useSignUpMutation({
    onSuccess: () => {
      navigate({ to: "/signin" });
    },
  });

  const form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      signUp(value);
    },
  });

  return (
    <Center h="100vh" maxW="full">
      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <Flex direction="column" gap="20px">
            <Center>
              <Heading size="3xl" letterSpacing="tight" color="teal.600">
                Sign Up
              </Heading>
            </Center>
            <form.AppField
              name="name"
              children={(field) => (
                <field.Input required label="Name" placeholder="John Doe" />
              )}
            />
            <form.AppField
              name="email"
              children={(field) => (
                <field.Input
                  required
                  label="Email"
                  placeholder="example@example.com"
                />
              )}
            />
            <form.AppField
              name="password"
              children={(field) => (
                <field.Input required label="Password" type="password" />
              )}
            />
            <form.AppForm>
              <form.SubmitButton label="Sign Up" />
            </form.AppForm>
            <Center>
              <ChakraLink as={RouterLink} href="/signin">
                Sign In!
              </ChakraLink>
            </Center>
          </Flex>
        </form>
      </Box>
    </Center>
  );
};
