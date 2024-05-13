"use server";

export async function ShareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),

    // formData in parameters automatically holds the all form fields data
    // Getting the form data with every name like <input name="title"/>
  };

  console.log(meal);
}
