time :: Behavior T
timeTrans :: Behavior a => Behavior T => Behavior a

Program :: Behaviour a
Program2 :: timeTrans (Behaviour T) Program
