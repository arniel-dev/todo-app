import "../styles/board.scss";
import useGetCategories from "../hooks/useGetCategories";
import useGetTickets from "../hooks/useGetTickets";
import AddTicketForm from "../components/AddTicketForm";
import useTicketStore from "../store/ticketStore";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import Background from "../components/Background";
import Category from "../components/Category";

import {
  faPlus,
  faCheckSquare,
  faList,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import CategoryManagement from "../components/CategoryManagement";
import FloatingMenuButton from "../components/FloatingMenuButton";
import HistoryLog from "../components/HistoryLog";
import Button from "../components/Button";
import useGenerateDefaultCategories from "../hooks/useGenerateDefaultCategories";
import Loader from "../components/Loader";

function Board() {
  const {
    isAddCategoryDrawerOpen,
    isAddTicketDrawerOpen,
    isHistoryDrawerOpen,

    //setter
    setIsAddTicketDrawerOpen,
    setIsAddCategoryDrawerOpen,
    setIsHistoryDrawerOpen,
  } = useTicketStore();
  const { categories, isLoading } = useGetCategories();

  useGetTickets();
  const { refetch } = useGenerateDefaultCategories();

  const openAddTicket = () => setIsAddTicketDrawerOpen(true);
  const openAddCategory = () => setIsAddCategoryDrawerOpen(true);
  const openHistory = () => setIsHistoryDrawerOpen(true);
  const closeDrawer = () => {
    setIsAddTicketDrawerOpen(false);
    setIsAddCategoryDrawerOpen(false);
    setIsHistoryDrawerOpen(false);
  };

  const menuItems = [
    {
      icon: faCheckSquare,
      label: "Add Ticket",
      onClick: openAddTicket,
      bgColor: "var(--primary-color)",
      ariaLabel: "Add Ticket",
    },
    {
      icon: faList,
      label: "Add Category",
      onClick: openAddCategory,
      bgColor: "var(--primary-color)",
      ariaLabel: "Add Category",
    },
    {
      icon: faHistory,
      label: "Activity Logs",
      onClick: openHistory,
      bgColor: "var(--primary-color)",
      ariaLabel: "Add Category",
    },
  ];
  const handleGenerate = (e) => {
    e.preventDefault();
    refetch();
  };
  if (isLoading) return <Loader />;

  return (
    <>
      <Background />
      <div className="todo-container">
        <Header />
        <FloatingMenuButton mainIcon={faPlus} items={menuItems} />
        <Drawer isOpen={isAddTicketDrawerOpen} onClose={closeDrawer}>
          <AddTicketForm onClose={closeDrawer} />
        </Drawer>
        <Drawer isOpen={isAddCategoryDrawerOpen} onClose={closeDrawer}>
          <CategoryManagement
            isOpen={isAddCategoryDrawerOpen}
            onClose={closeDrawer}
          />
        </Drawer>
        <Drawer
          isOpen={isHistoryDrawerOpen}
          onClose={closeDrawer}
          customWidth={"55vw"}
        >
          <HistoryLog isOpen={isHistoryDrawerOpen} onClose={closeDrawer} />
        </Drawer>

        <div className="board">
          {categories
            .sort((a, b) => a.order - b.order)
            .map((category) => (
              <Category key={category.id} category={category} />
            ))}
          {categories?.length < 1 && (
            <Button className="button" onClick={(e) => handleGenerate(e)}>
              Generate Default Category
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Board;
