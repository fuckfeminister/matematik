import { useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import { Percent as Input } from '@components/Input';
import SEO from '@components/SEO';

import { AnswerProps } from '@interfaces/index';

export default function Hele_tallet() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);

  function calc() {
    const vars = { x, y };

    const heleTallet = Calc('y / x * 100', vars);

    setAnswers([{ name: 'Hele tallet', ...heleTallet }]);
  }
  return (
    <>
      <SEO
        title="Hvad er hele tallet når x% er y"
        description="En procent beregner der udregner et tal når man kender en procentdel af det"
      />
      <Calculator calculate={calc} answers={answers}>
        Beregn hele tallet når <Input name="x" value={x} onChange={setX} /> procent er{' '}
        <Input name="y" value={y} onChange={setY} />
      </Calculator>
    </>
  );
}
