import { useForm, Controller } from "react-hook-form";
import useTicketStore from "../store/ticketStore";
import "../styles/addTicketForm.scss";
import useAuth from "../hooks/useAuth";
import { useAddTicket } from "../hooks/useAddTicket";
import PropTypes from "prop-types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { toast } from "react-toastify";

function AddTicketForm({ onClose }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      expiry_date: "",
      priority: "Low",
      category_id: "",
    },
  });

  const addTicket = useAddTicket();
  const { categories } = useTicketStore();
  const { userInfo } = useAuth();

  // Dynamically set defaultValues when categories are available
  useEffect(() => {
    if (categories.length > 0) {
      reset({
        title: "",
        description: "",
        expiry_date: "",
        priority: "Low",
        category_id: categories[0]?.id || "",
      });
    }
  }, [categories, reset]);

  const onSubmit = async (data) => {
    try {
      addTicket.mutate({ ...data, user_id: userInfo.user_id });
      if (addTicket.isSuccess) {
        toast.success(`Ticket "${data.title}" was successfully created"`);
      }
      onClose();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="header">
        <h2>Create Ticket</h2>
        <button onClick={() => onClose()} className="close-button">
          <FontAwesomeIcon icon={faTimes} className="close-icon" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="add-ticket-form">
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input {...field} placeholder="Title" required />
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea {...field} placeholder="Description" />
          )}
        />

        <Controller
          name="expiry_date"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input {...field} type="datetime-local" required />
          )}
        />

        <Controller
          name="priority"
          control={control}
          defaultValue="Low"
          render={({ field }) => (
            <select {...field} required>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          )}
        />

        <Controller
          name="category_id"
          control={control}
          render={({ field }) => (
            <select {...field} required>
              {categories.map((category) => (
                <option value={category?.id} key={category.id}>
                  {category?.name}
                </option>
              ))}
            </select>
          )}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
}

AddTicketForm.propTypes = {
  onClose: PropTypes.func,
};

export default AddTicketForm;
