import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({interviewId, uerId, role, type, techstack, createdAt}: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type)? 'Mixed': type;
    const formatedDate= dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

  return (
<div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
       
          {/* <div
            className={cn(
              "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
              badgeColor
            )}
          >
            <p className="badge-text ">{normalizedType}</p>
          </div> */}

          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          <h3 className="mt-5 capitalize">{role} Interview</h3>

          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formatedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" width={22} height={22} alt="star" />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>


          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "You haven't taken this interview yet. Take it now to improve your skills."}
          </p>
        </div>

        <div className="flex flex-col items-center w-full gap-4">
  {/* Tech icons - full width and centered */}
  <div className="flex flex-wrap justify-center w-full gap-2">
    <DisplayTechIcons techStack={techstack} />
  </div>

  {/* Button - centered below */}
  <Button className="btn-primary">
    <Link
      href={
        feedback
          ? `/interview/${interviewId}/feedback`
          : `/interview/${interviewId}`
      }
    >
      {feedback ? "Check Feedback" : "View Interview"}
    </Link>
  </Button>
</div>
       
      </div>
    </div>

  )
}

export default InterviewCard