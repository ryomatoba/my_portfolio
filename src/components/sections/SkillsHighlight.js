import React from 'react';
import SkillBar from '../ui/SkillBar';

// 仮のスキルデータ（実際のデータは別ファイルから読み込むことを推奨）
const highlightedSkills = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Node.js', level: 75 },
];

const SkillsHighlight = () => {
  return (
    <div className="skills-highlight">
      {highlightedSkills.map((skill, index) => (
        <SkillBar 
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
};

export default SkillsHighlight;