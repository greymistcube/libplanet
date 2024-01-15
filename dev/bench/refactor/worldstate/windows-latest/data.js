window.BENCHMARK_DATA = {
  "lastUpdate": 1705297410388,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "317a05b99efaccae95fcfc7558902778cf1a4304",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T14:33:08+09:00",
          "tree_id": "765a74f944205f529edc434565fa9c34f6c935e1",
          "url": "https://github.com/greymistcube/libplanet/commit/317a05b99efaccae95fcfc7558902778cf1a4304"
        },
        "date": 1704865476315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972757,
            "unit": "ns",
            "range": "± 111867.90302979147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741439.6226415094,
            "unit": "ns",
            "range": "± 72264.40058675194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1594653.1914893617,
            "unit": "ns",
            "range": "± 112241.03642840295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11111155.913978495,
            "unit": "ns",
            "range": "± 983337.4107402726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34279.74683544304,
            "unit": "ns",
            "range": "± 1798.2455657037474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5053846.666666667,
            "unit": "ns",
            "range": "± 46784.274932421264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13506286.666666666,
            "unit": "ns",
            "range": "± 243083.98862082532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33088727.272727273,
            "unit": "ns",
            "range": "± 807406.226418198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65657040,
            "unit": "ns",
            "range": "± 882805.746955208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131109822.22222222,
            "unit": "ns",
            "range": "± 1993769.1091632438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3387354.4170673075,
            "unit": "ns",
            "range": "± 8394.451381719733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071143.1770833333,
            "unit": "ns",
            "range": "± 4502.214030891345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731794.0169270834,
            "unit": "ns",
            "range": "± 2746.6414213486364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928690.9705528845,
            "unit": "ns",
            "range": "± 3100.9308085699868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615453.7825520834,
            "unit": "ns",
            "range": "± 1933.414512340896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563497.51953125,
            "unit": "ns",
            "range": "± 1973.020272835025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2227489.6551724137,
            "unit": "ns",
            "range": "± 63561.76043158781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2267400,
            "unit": "ns",
            "range": "± 147621.15206189957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2784348.5714285714,
            "unit": "ns",
            "range": "± 89921.58797081641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2838646.9696969697,
            "unit": "ns",
            "range": "± 194566.68048252474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12596184.782608695,
            "unit": "ns",
            "range": "± 1668207.8609538751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173028.0487804878,
            "unit": "ns",
            "range": "± 9003.744411615085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171215.29411764705,
            "unit": "ns",
            "range": "± 11525.25700449269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143935.7142857143,
            "unit": "ns",
            "range": "± 4056.107811931357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2903382.3529411764,
            "unit": "ns",
            "range": "± 56617.34755459361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488457.1428571427,
            "unit": "ns",
            "range": "± 32786.88091965383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12393.939393939394,
            "unit": "ns",
            "range": "± 2185.6124244153652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53602.083333333336,
            "unit": "ns",
            "range": "± 5910.828228842148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43215,
            "unit": "ns",
            "range": "± 1939.4936435111972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53603.092783505155,
            "unit": "ns",
            "range": "± 11739.165693028825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2450,
            "unit": "ns",
            "range": "± 436.7759103662754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10233.333333333334,
            "unit": "ns",
            "range": "± 2008.962375098499"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "c2c91f158d66c99735446b52331b68c5a2f18328",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T13:49:52+09:00",
          "tree_id": "e873ef18847f0b94944d2301a00558690c39a59a",
          "url": "https://github.com/greymistcube/libplanet/commit/c2c91f158d66c99735446b52331b68c5a2f18328"
        },
        "date": 1704865483268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009201,
            "unit": "ns",
            "range": "± 119701.40754680736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1775190.4761904762,
            "unit": "ns",
            "range": "± 97781.70994501226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1547533.3333333333,
            "unit": "ns",
            "range": "± 163063.05055450284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11109058.510638298,
            "unit": "ns",
            "range": "± 863864.1479478042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34511.90476190476,
            "unit": "ns",
            "range": "± 1793.858650588252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5113907.692307692,
            "unit": "ns",
            "range": "± 43997.773836457935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14354080,
            "unit": "ns",
            "range": "± 178595.36148191852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33668128.571428575,
            "unit": "ns",
            "range": "± 332141.9910186036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66358978.571428575,
            "unit": "ns",
            "range": "± 564527.3818780715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136827028.57142857,
            "unit": "ns",
            "range": "± 1939874.074195607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3282994.2838541665,
            "unit": "ns",
            "range": "± 12889.27466451701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051027.8125,
            "unit": "ns",
            "range": "± 4468.4194441723985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748713.45703125,
            "unit": "ns",
            "range": "± 1957.5737267780162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968139.678485577,
            "unit": "ns",
            "range": "± 4789.601191976684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620471.7145647322,
            "unit": "ns",
            "range": "± 1516.0640606883658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574190.185546875,
            "unit": "ns",
            "range": "± 411.5707723776656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2161215.3846153845,
            "unit": "ns",
            "range": "± 23647.157903711744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2337306.1224489794,
            "unit": "ns",
            "range": "± 84758.49615270452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2803907.8947368423,
            "unit": "ns",
            "range": "± 95426.00750823431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2983152.525252525,
            "unit": "ns",
            "range": "± 279563.2911230622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12537914.130434783,
            "unit": "ns",
            "range": "± 1508662.1569669177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181517.28395061727,
            "unit": "ns",
            "range": "± 9437.091582201807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167457.8947368421,
            "unit": "ns",
            "range": "± 6497.800379700509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143015.38461538462,
            "unit": "ns",
            "range": "± 5634.501025818946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2950373.3333333335,
            "unit": "ns",
            "range": "± 47355.38084777795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2606493.3333333335,
            "unit": "ns",
            "range": "± 47801.08287277103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12701.052631578947,
            "unit": "ns",
            "range": "± 2191.157021517429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56878.94736842105,
            "unit": "ns",
            "range": "± 6659.609833578716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44868.88888888889,
            "unit": "ns",
            "range": "± 2696.5497907571557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66071.71717171717,
            "unit": "ns",
            "range": "± 12809.443585902412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3081.9148936170213,
            "unit": "ns",
            "range": "± 592.9628115698548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11958.333333333334,
            "unit": "ns",
            "range": "± 1812.1616441590972"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "9d5838bbe977e57a1edbb9ba8e74cbe34877851a",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T16:18:46+09:00",
          "tree_id": "9a7b09fe5b4da2a43779332d4bcf807110efea2a",
          "url": "https://github.com/greymistcube/libplanet/commit/9d5838bbe977e57a1edbb9ba8e74cbe34877851a"
        },
        "date": 1704871961377,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1082224.2424242424,
            "unit": "ns",
            "range": "± 165747.2775600036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1678264.705882353,
            "unit": "ns",
            "range": "± 64365.101797571675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575450.5263157894,
            "unit": "ns",
            "range": "± 96641.86889846517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11325515.555555556,
            "unit": "ns",
            "range": "± 1073008.3585453166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37736.55913978495,
            "unit": "ns",
            "range": "± 5111.427626369823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5280669.230769231,
            "unit": "ns",
            "range": "± 77912.59402492197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13865355.555555556,
            "unit": "ns",
            "range": "± 381110.29933132255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35908150,
            "unit": "ns",
            "range": "± 437175.5847746726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69295685.71428572,
            "unit": "ns",
            "range": "± 906171.1961342056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131513786.66666667,
            "unit": "ns",
            "range": "± 817462.9531725115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3455247.578125,
            "unit": "ns",
            "range": "± 15264.462246040115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086451.787860577,
            "unit": "ns",
            "range": "± 2042.996859193688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757747.265625,
            "unit": "ns",
            "range": "± 1637.394153081856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914129.5200892857,
            "unit": "ns",
            "range": "± 13370.600906118803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625443.96484375,
            "unit": "ns",
            "range": "± 792.0646412700906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564673.9322916666,
            "unit": "ns",
            "range": "± 713.4599605024713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2107515.789473684,
            "unit": "ns",
            "range": "± 61194.91908919285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2420683.0508474577,
            "unit": "ns",
            "range": "± 107025.53538765696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2898416.9811320757,
            "unit": "ns",
            "range": "± 119433.06901912286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2922953.6842105263,
            "unit": "ns",
            "range": "± 167056.81910879983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12675219.78021978,
            "unit": "ns",
            "range": "± 1569229.3842817515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166901.7857142857,
            "unit": "ns",
            "range": "± 6239.594715026947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183426.3440860215,
            "unit": "ns",
            "range": "± 14995.835638236824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150291.57894736843,
            "unit": "ns",
            "range": "± 11060.488073162654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2952540,
            "unit": "ns",
            "range": "± 35749.08190629316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450857.1428571427,
            "unit": "ns",
            "range": "± 39340.421848383776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14012.765957446809,
            "unit": "ns",
            "range": "± 2309.6913186930083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63222.68041237113,
            "unit": "ns",
            "range": "± 8670.393891891521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59877.77777777778,
            "unit": "ns",
            "range": "± 10960.025282589972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72202.1052631579,
            "unit": "ns",
            "range": "± 13478.42230608398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3536.734693877551,
            "unit": "ns",
            "range": "± 1246.5530002752653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14350.515463917525,
            "unit": "ns",
            "range": "± 2844.6998857282897"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "9a53103eff2ae42a75bac69880162fb8c56532e3",
          "message": "Minor cleanup",
          "timestamp": "2024-01-15T14:30:29+09:00",
          "tree_id": "7ff39cfea98c388bd92eea5d3f7282739e1297e7",
          "url": "https://github.com/greymistcube/libplanet/commit/9a53103eff2ae42a75bac69880162fb8c56532e3"
        },
        "date": 1705297388874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968842.7083333334,
            "unit": "ns",
            "range": "± 109683.44378714943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1694222.5352112676,
            "unit": "ns",
            "range": "± 82442.67479750156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1461905.0505050505,
            "unit": "ns",
            "range": "± 128885.32664043533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10957274.175824177,
            "unit": "ns",
            "range": "± 1061113.719043519"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34154.83870967742,
            "unit": "ns",
            "range": "± 1564.428080629021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4979730.769230769,
            "unit": "ns",
            "range": "± 13757.021517234065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13135830.76923077,
            "unit": "ns",
            "range": "± 131788.9878088921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32508569.230769232,
            "unit": "ns",
            "range": "± 286506.3012239445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65179028.571428575,
            "unit": "ns",
            "range": "± 291632.3144186645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131848320,
            "unit": "ns",
            "range": "± 1072322.968539396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355316.238839286,
            "unit": "ns",
            "range": "± 7184.3157347177375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1045243.7337239584,
            "unit": "ns",
            "range": "± 833.1920305731816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747571.1565290178,
            "unit": "ns",
            "range": "± 1183.5248739405167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918461.1588541667,
            "unit": "ns",
            "range": "± 1768.3141347400147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628080.9269831731,
            "unit": "ns",
            "range": "± 819.6112302593555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560114.9983723959,
            "unit": "ns",
            "range": "± 928.483016437395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151760.4166666665,
            "unit": "ns",
            "range": "± 83944.22601152361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270420.588235294,
            "unit": "ns",
            "range": "± 57266.568487295976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2816747.619047619,
            "unit": "ns",
            "range": "± 65634.52307320911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2820511.6279069767,
            "unit": "ns",
            "range": "± 153132.33908931777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12438965.217391305,
            "unit": "ns",
            "range": "± 1537598.5346025922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179304.9180327869,
            "unit": "ns",
            "range": "± 8019.942357014549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168971.73913043478,
            "unit": "ns",
            "range": "± 10244.830656674932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141605.6603773585,
            "unit": "ns",
            "range": "± 5707.296783482177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796653.846153846,
            "unit": "ns",
            "range": "± 18207.39846805026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490084.210526316,
            "unit": "ns",
            "range": "± 52699.739227247446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10400,
            "unit": "ns",
            "range": "± 1413.8452296249873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51791.48936170213,
            "unit": "ns",
            "range": "± 5816.599523434173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43188.67924528302,
            "unit": "ns",
            "range": "± 1480.3404464668165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53549.48453608248,
            "unit": "ns",
            "range": "± 10758.079557857709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2361.2903225806454,
            "unit": "ns",
            "range": "± 341.9993192417952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10238.888888888889,
            "unit": "ns",
            "range": "± 934.8068892021898"
          }
        ]
      }
    ]
  }
}