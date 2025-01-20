import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

interface WordDetailsProps {
  word: string;
  pronunciation: string;
  usage: string;
  example: string;
  origin: string;
}

const WordDetails: React.FC<WordDetailsProps> = ({ word, pronunciation, usage, example, origin }) => {
  return (
    <Card className="max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>{word}</CardTitle>
        <CardDescription>{pronunciation}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-semibold">Usage:</h3>
          <p>{usage}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Example:</h3>
          <p>{example}</p>
        </div>
        <div>
          <h3 className="font-semibold">Origin:</h3>
          <p>{origin}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordDetails;
