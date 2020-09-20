import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Button,
  InputLabel,
  Input,
} from "@material-ui/core";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Edit Task"
        visible={open}
        onCancel={(e) => setOpen(false)}
        onOk={(e) => updateTodo()}
        closable={false}
        onRequestClose={(e) => setOpen(false)}
      >
        <InputLabel>Update Todo</InputLabel>
        <Input
          placeholder={props.todo.todo}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
        </ListItem>
        <EditOutlined onClick={(e) => setOpen(true)} />
        <DeleteOutlined
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
