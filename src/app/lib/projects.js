const projects = [
  {
    id: "1",
    slug: "dissertation",
    thumbnail: "/dissertation-thumbnail.png",
    title: "Dissertation",
    short_desc:
      "I completed the dissertation as part of my MSc Artificial Intelligence Degree. The focus of the dissertation was to build a motion sensing camera device to detect and classify wildlife.",
    long_desc:
      "I completed this dissertation as part of my MSc Artificial Intelligence Degree. The dissertation focuses on building a motion-sensing camera device using a Raspberry Pi and Camera Module that could detect and classify wildlife. I used OpenCV's frame difference method to detect motion in a set of frames coming from a live camera stream. The detected motion is then classified into one of the 20 animal classes using a CNN (Convolutional Neural Network) based classification model. You can download the full copy of the dissertation document here.",
    hero_img: "",
    sections: [],
  },
];

export function getProjectById(projectId) {
  return projects.find((item) => item.id == projectId);
}
