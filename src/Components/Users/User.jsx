import React from 'react';

const User = ({ item }) => {
    return (
        <div className="user__card d-flex flex-column align-items-center mx-auto">
            <div className="user__photo text-center">
                <div className="user__img">
                    <img
                        className="rounded-circle d-block user__img"
                        alt="photo"
                        src={item.photo}
                    />
                </div>
            </div>
            <div>
                <h3 className="user__name" data-title={item.name}>
                    {item.name}
                </h3>
                <p className="user__position" data-title={item.position}>
                    {item.position}
                </p>

                <p className="user__email  ">
                    <a
                        className="user__link d-block"
                        href={`mailto:${item.email}`}
                        data-title={item.email}
                        type="email"
                    >
                        {item.email}
                    </a>
                </p>

                <p className="user__cell">
                    <a
                        className="user__link d-block"
                        href={`tel:${item.phone}`}
                        data-title={item.phone}
                        type="tel"
                    >
                        {item.phone}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default User;
