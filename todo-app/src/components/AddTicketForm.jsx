import { useForm } from "react-hook-form";
import { createTicket } from "../services/ticketService";
import useTicketStore from "../store/ticketStore";
import "../styles/addTicketForm.scss";
import useAuth from "../hooks/useAuth";
function AddTicketForm() {
  const { register, handleSubmit, reset } = useForm();
  const { addTicket, categories } = useTicketStore();
  const { userInfo } = useAuth();

  const onSubmit = async (data) => {
    try {
      const newTicket = await createTicket({
        ...data,
        user_id: userInfo.user_id,
      });
      addTicket(newTicket);
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
