import './index.css';
import { H3 } from '../../../components/H3';
import { H1 } from '../../../components/H1';
import { Button } from '../../../components/Button';

export const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <section>
            <H3 className="text-h3">Bienvenido a mi sitio web</H3>
            <H1 className="text-h1">Alejandra Diavanera</H1>
            <Button palette="primary">Contáctame</Button>
          </section>
        </div>
      </div>
    </div>
  );
};
