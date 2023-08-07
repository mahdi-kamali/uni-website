import { Icon } from "@iconify/react"

const Users = () => {
    return (
        <div className="dashboard-users">
            <table>
                <thead>
                    <tr>
                        <th>
                            <li>
                                <Icon icon="clarity:user-solid" />
                                <span>
                                    نام و نام خانوادگی
                                </span>
                            </li>

                        </th>
                        <th>
                            <li>
                                <Icon icon="ic:sharp-alternate-email" />
                                <span>
                                    ایمیل
                                </span>
                            </li>
                        </th>
                        <th>
                            <li>
                                <Icon icon="clarity:date-solid" />
                                <span>
                                    تاریخ ثبت نام
                                </span>
                            </li>
                        </th>
                        <th>
                            <li>
                                <Icon icon="ant-design:setting-filled" />
                                <span>
                                    کنترل ها
                                </span>
                            </li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <li>
                                مهدی کمالی
                            </li>
                        </td>
                        <td>
                            <li>
                                ایمیل
                            </li>
                        </td>
                        <td>
                            <li>
                                13400
                            </li>
                        </td>
                        <td>
                            <li>
                                <button>حذف</button>
                            </li>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users