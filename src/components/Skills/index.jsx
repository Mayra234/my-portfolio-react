import { SkillBar } from '../SkillBar';
import { Card } from '../Card';

export const Skills = () => {
  return (
    <Card>
      <SkillBar mainText="Html" percentage="90" />
      <SkillBar mainText="Css" percentage="70" />
      <SkillBar mainText="Javascript" percentage="90" />
      <SkillBar mainText="Php" percentage="13" />
    </Card>
  );
};
