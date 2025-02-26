import { useForm } from "react-hook-form";
import useTicketStore from "../store/ticketStore";
import "../styles/addTicketForm.scss";
import useAuth from "../hooks/useAuth";
import { useAddTicket } from "../hooks/useAddTicket";
function AddTicketForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      category_id: 1,
    },
  });
  const addTicket = useAddTicket();
  const { categories } = useTicketStore();
  const { userInfo } = useAuth();

  const onSubmit = async (data) => {
    try {
      addTicket.mutate({ ...data, user_id: userInfo.user_id });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-ticket-form">
      <input {...register("title")} placeholder="Title" required />
      <textarea {...register("description")} placeholder="Description" />
      <input {...register("expiry_date")} type="datetime-local" required />
      <select {...register("priority")} required>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select {...register("category_id")} defaultValue={1} required>
        {categories.map((category) => (
          <option value={category?.id} key={category.id}>
            {category?.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Ticket</button>
    </form>
  );
}
export default AddTicketForm;
