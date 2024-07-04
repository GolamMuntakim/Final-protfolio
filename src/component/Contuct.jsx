import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSquareFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Contuct = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kv8dt0s',
                'template_czjcl3h',
                form.current, {
                publicKey: '155vwpMBJ91MzHvxl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id="contact">
            <div className='font-bold text-3xl mt-10 text-center border-2-b  border-cyan-950'><h1>Contuct Us</h1></div>
            <div className='mt-4'>
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto">
      <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='from_name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='from_email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="Write message" name='message' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
            </div>

            <div className='mt-4 flex justify-center items-center gap-4'>
                <Link className='text-5xl' to="https://www.facebook.com/seaum.ahmed.1"><FaSquareFacebook /></Link>
                <Link className='text-5xl' to="https://www.linkedin.com/in/golammuntakim/"><CiLinkedin /></Link>
                <Link className='text-5xl' to="https://github.com/GolamMuntakim"><FaGithubSquare /></Link>
            </div>

        </div>
    );
};

export default Contuct;