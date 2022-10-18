import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button/Button";

import styles from "./QuestionsLanding.module.scss";

import userprofilePicture from "../../../assets/profilePicture.jpg"
import { QuestionCard } from "./UI/QuestionCard/QuestionCard";

export const QuestionsLanding = () => {
  const [QuestionList, setQuestionList] = useState([
    {
      questionId: "20323123",
      questionTitle: "please Help html error",
      questionText:
        "Lorem Ipsum is simply dummy text of the printing QWSOH;qnsawedo;jawldaw;bjd and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      userDetails: {
        userprofilePicture: userprofilePicture,
        userName: "Caveman822",
        userScore: 20009
      },
      questionCreated: "2022-10-11T00:19:38+02:00",
      questionInteraction: {
        answers: 3,
        votes: 2,
        correctAnswer: true,
      },
      questionTags:[
        {id: 1,
        title: "CSS"},
        {id: 2,
          title: "HTML"}
      ]
    },
    {
      questionId: "20323123",
      questionTitle: "please Help html error",
      questionText:
        "Lorem Ipsum is simply dummy text of the printing QWSOH;qnsawedo;jawldaw;bjd and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      userDetails: {
        userprofilePicture: userprofilePicture,
        userName: "Caveman822",
        userScore: 20009
      },
      questionCreated: "2022-10-11T00:19:38+02:00",
      questionInteraction: {
        answers: 0,
        votes: 2,
        correctAnswer: false,
      },
      questionTags:[
        {id: 1,
        title: "CSS"},
        {id: 2,
          title: "HTML"}
      ]
    },
    {
      questionId: "20323123",
      questionTitle: "please Hawdawdawdawdawdaml error",
      questionText:
        "Lorem Ipsum is simply dummy text of the printing QWSOH;qnsawedo;jawldaw;bjd and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      userDetails: {
        userprofilePicture: userprofilePicture,
        userName: "coovman",
        userScore: 43
      },
      questionCreated: "2022-10-11T00:19:38+02:00",
      questionInteraction: {
        answers: 3,
        votes: 2,
        correctAnswer: false,
      },
      questionTags:[
        {id: 1,
        title: "CSS"},
        {id: 2,
          title: "HTML"}
      ]
    },
    
  ]);

  // sorting will need to be done server side 

  return (
    <section className={styles.section}>
      <div className={`${styles.row} ${styles.col}`}>
        {/* <nav>
          <div className={styles.nav_container}>
            <a>Home</a>
          </div>
        </nav> */}

        <div className={styles.questions_list}>
          <header>
            <h2>All Questions</h2>
            <Link to="/question-portal">Ask Question</Link>
          </header>
          <div className={styles.questions_filter_header}>
            <h4>20,003,103 questions</h4>
            <table>
              <tr>
                <th>
                  <a>Newest</a>
                </th>
                <th>
                  <a>Unanswered</a>
                </th>
                <th>
                  <a>No Accepted Answer</a>
                </th>
              </tr>
            </table>
          </div>
          {QuestionList.map((question) => {
            return (
              <QuestionCard
                key={question.questionId}
                questionDetails={question}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};