import React, { useState } from "react";
import "./header.scss";
import { useSearchUserQuery } from "../../context/api/userApi";

const Header = () => {
    const [value, setValue] = useState("");

    let { data, error } = useSearchUserQuery({ value: value.trim() });
    // console.log(searchUser);

    // console.log(data?.length);
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div className="header__logo">LOGO</div>
                    <form action="" className="header__form">
                        <input
                            type="text"
                            placeholder="Search..."
                            // value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        {value.trim() ? (
                            <div className="header__result">
                                {!error
                                    ? data?.payload?.map((el) => (
                                          <p key={el._id}>{el.fname}</p>
                                      ))
                                    : "user not found"}
                            </div>
                        ) : (
                            <></>
                        )}
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
