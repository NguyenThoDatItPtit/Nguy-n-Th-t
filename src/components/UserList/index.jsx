import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

  return (
    <div>
      <Typography variant="body1">
        This is the user list, which takes up 3/12 of the window. You might
        choose to use <a href="https://mui.com/components/lists/">Lists</a>{" "}
        and <a href="https://mui.com/components/dividers/">Dividers</a> to
        display your users like so:
      </Typography>
      <List component="nav">
        {users.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem>
              <ListItemText
                primary={
                  <Link to={`/users/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.first_name}
                  </Link>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Typography variant="body1">
        The model comes in from models.userListModel()
      </Typography>
    </div>
  );
}

export default UserList;
