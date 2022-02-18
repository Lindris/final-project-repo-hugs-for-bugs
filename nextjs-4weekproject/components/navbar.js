import { Menu } from "antd";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const { SubMenu } = Menu;

export default function Navbar() {
  const { user } = useUser();
  user ? console.log(user) : console.log("user");
  return (
    <Menu mode="horizontal" style={{ border: "0" }}>
      <Menu.Item key="logo">
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="userCreate">
        {user ? (
          <Link href="/create">
            <a>Create an Event</a>
          </Link>
        ) : (
          <Link href="/api/auth/login">
            <a>Create an Event</a>
          </Link>
        )}
      </Menu.Item>
      {user ? (
        <SubMenu
          key="SubMenu"
          // icon={<SettingOutlined />}
          title={user.name}
          style={{ marginLeft: "auto" }}
        >
          <Menu.Item key="profile">
            <Link href="/profile">
              <a>My events</a>
            </Link>
          </Menu.Item>
          <Menu.Item disabled key="Past events">
            <Link href="/api/auth/logout">
              <a>Organised events</a>
            </Link>
          </Menu.Item>
          <Menu.Item disabled key="Past events">
            <Link href="/api/auth/logout">
              <a>Past events</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Link href="/api/auth/logout">
              <a>Log out</a>
            </Link>
          </Menu.Item>
        </SubMenu>
      ) : (
        <Menu.Item style={{ marginLeft: "auto" }} key="login">
          <Link href="/api/auth/login">
            {/* put in href once auth0 had been set up */}
            <a>Sign up/Log in</a>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );
}

// each menu and menu.item is from antd (UI library)
// menu.item is a list item so they need a key for react to render
// add a search bar
// create a page for contact and connect link to page

// could organised events just be in my events?

// Signup/login rather than two seperate buttons?
