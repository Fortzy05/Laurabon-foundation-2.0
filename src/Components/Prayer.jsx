import React from "react";

export default function Prayer() {
  return (
    <section>
      <div className="bg-green-300 mx-auto">
        <p className="md:mx-auto p-5 text-white text-extrabold md:text-7xl text-5xl text-center font-serif uppercase">
          Let us Pray with you
        </p>
      </div>
      <p className="text-center md:text-7xl text-4xl py-8 font-serif">
        How can we pray for you?
      </p>
      <form className="flex flex-col md:w-1/2 md:mx-auto py-3 mx-4 font-serif text-lg">
        <label>FIRST NAME</label>
        <input
          className="p-2 my-2 w-full rounded outline-none border"
          type="text"
          name="FirstName"
          id="firstName"
          placeholder="FIRST NAME"
        />
        <label>LAST NAME</label>
        <input
          className="p-2 my-2 rounded outline-none border"
          type="text"
          required
          name="LastName"
          id=""
          placeholder="LAST NAME"
        />
        <label className="flex">EMAIL</label>
        <input
          className="p-2 my-2 rounded outline-none border "
          type="email"
          required
          name="Email"
          id=""
          placeholder="EMAIL"
        />
        <label>PLEASE PRAY FOR ME IN THE FOLLOWING AREA</label>
        <select
          required
          id="options"
          name="options"
          className="p-2 my-2  rounded outline-none border text-lg"
        >
          <option value="option1">General</option>
          <option value="option2">Anxiety</option>
          <option value="option3"> Emotional Healing</option>
          <option value="option4">Physical Healing</option>
          <option value="option5">Finances</option>
          <option value="option6">Relationship</option>
          <option value="option7">Spiritual Growth</option>
        </select>
        <label>REQUEST</label>
        <textarea
          className="outline-none p-2 border"
          required
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Briefly tell us how we can pray for you"
        ></textarea>
        <button
          type="submit"
          className="p-3 my-6 w-1/2 mx-auto text-white font-serif bg-blue-500"
        >
          SEND REQUEST
        </button>
      </form>
    </section>
  );
}
