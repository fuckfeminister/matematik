<script>
  import { Calc, ValidateCheck } from '@utils/math';
  import { add, reset } from '@store/answer';
  import { emitter } from '@event/event';
  import { vars, error, answer, reset as resetShape } from '@store/shape';
  export let calculator;

  function calculate() {
    $error = '';
    let calcValues = { ...$vars };
    reset();
    resetShape();

    if (calculator.calculations && !$error) {
      calculator.calculations.forEach((calculation) => {
        if (!$error) {
          let check = false;
          if (!Object.hasOwnProperty.call(calculation, 'if')) {
            check = true;
          } else {
            if (/ && /.test(calculation.if)) {
              check = true;
              calculation.if.split(' && ').forEach((i) => {
                if (!$vars[i]) {
                  check = false;
                }
              });
            } else {
              check = $vars[calculation.if];
            }
          }

          if (check) {
            if (calculation.checks) {
              calculation.checks.forEach((check) => {
                try {
                  ValidateCheck(check, calcValues);
                } catch (err) {
                  $error = err.message;
                  reset();
                  resetShape();
                }
              });
            }
            if (!$error) {
              calculation.calculations.forEach((calc) => {
                const ans = Calc(calc.calc, calcValues, calc.entered);
                $answer[calc.name] = ans.answer;
                calcValues[calc.name] = ans.answer;
                delete ans.answer;
                add({ ...ans, name: calc.label || calc.name });
              });
            }
          }
        }
      });
    }
    if (calculator.event) {
      emitter.emit('calculation', vars);
    }
  }

  emitter.on('shape-calc', calculate);
</script>
