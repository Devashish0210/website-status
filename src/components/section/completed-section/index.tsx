import { FC } from 'react';
import classNames from '@/components/section/completed-section/completed-section.module.scss';
import Complete from '@/components/challenges/complete';
import { CHALLENGES_SCREEN } from '@/components/constants/display-sections.js';
import Accordion from '@/components/Accordion';

type CompletedSectionProps = {
  sectionContent: {
    is_active: number;
    id: number;
    is_user_subscribed: number;
    title: string;
    level: string;
    start_date: string;
    end_date: string;
    participants: {
      user_id: string;
      first_name: string;
      last_name: string;
      yoe: number;
      company: string;
      designation: string;
      img: string;
      github_id: string;
      linkedin_id: string;
      twitter_id: string;
      instagram_id: string;
      is_member: number;
      rds_member_id: string;
    }[];
  }[];
  screen: string;
};

const CompletedSection: FC<CompletedSectionProps> = ({
  sectionContent,
  screen,
}) => {
  let completeContent;

  if (screen === CHALLENGES_SCREEN) {
    completeContent = sectionContent
      .filter((challenge) => !challenge.is_active)
      .map((completedChallenge) => (
        <Complete key={completedChallenge.id} content={completedChallenge} />
      ));
  }
  return (
    <div className={classNames.complete}>
      <Accordion open title="Completed" key="Completed">
        {completeContent}
      </Accordion>
    </div>
  );
};

export default CompletedSection;
