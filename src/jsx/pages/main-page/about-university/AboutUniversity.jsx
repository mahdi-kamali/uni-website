import { Icon } from '@iconify/react';
const AboutUniversity = () => {
    return (
        <section className="about-unversity">
            <div className="left">
                <h1>معرفی دانشگاه</h1>
                <p>
                    دانشگاه فنی و حرفه ای از سال 1390 به عنوان تنها دانشگاه متولی آموزش های عالی فنی وحرفه ای زیر نظر وزارت علوم - تحقیقات وفناوری شروع به کار کرد. این دانشگاه دانشجویان خود را از بین دانش آموختگان دوره متوسطه نظام جدید هنرستان ها و متناسب با رشته تحصیلی آنان در شاخه های فنی وحرفه ای و یا کار و دانش و یا فارغ التحصیلان دوره چهار ساله نظام قدیم هنرستان ها و از طریق آزمون ویژه ای که سالیانه توسط سازمان سنجش آموزش کشور به صورت سراسری برگزار می شود، انتخاب می نماید.
                </p>
                <button>
                    بیشتر
                    <Icon icon="fa-brands:readme" />
                </button>
            </div>
            <div className="right">
                <img src={require("../../../../images/about-university/1.png")} alt="" />
            </div>
        </section>
    )
}

export default AboutUniversity