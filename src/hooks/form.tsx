// import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

// const { fieldContext, useFieldContext, formContext, useFormContext } =
//   createFormHookContexts();

// export function TextField({ label }: { label: string }) {
//   const field = useFieldContext<string>();
//   return (
//     <label>
//       <span>{label}</span>
//       <input
//         value={field.state.value}
//         onChange={(e) => field.handleChange(e.target.value)}
//       />
//     </label>
//   );
// }

// export function SubscribeButton({ label }: { label: string }) {
//   const form = useFormContext();
//   return (
//     <form.Subscribe selector={(state) => state.isSubmitting}>
//       {(isSubmitting) => <button disabled={isSubmitting}>{label}</button>}
//     </form.Subscribe>
//   );
// }

// const { useAppForm, withForm } = createFormHook({
//   fieldComponents: {
//     TextField,
//   },
//   formComponents: {
//     SubscribeButton,
//   },
//   fieldContext,
//   formContext,
// });
