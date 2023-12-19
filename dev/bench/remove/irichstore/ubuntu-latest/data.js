window.BENCHMARK_DATA = {
  "lastUpdate": 1702968030207,
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
          "id": "56df40f304df3cbc85ce84447c148d9cdd54da7a",
          "message": "Remove unnecessary arguments",
          "timestamp": "2023-12-19T15:18:03+09:00",
          "tree_id": "4b66446b048ef2de59401d42b381fefc544182ee",
          "url": "https://github.com/greymistcube/libplanet/commit/56df40f304df3cbc85ce84447c148d9cdd54da7a"
        },
        "date": 1702967344710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715250.315011161,
            "unit": "ns",
            "range": "± 40586.068323255764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195350.389485677,
            "unit": "ns",
            "range": "± 2301.6349810230886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758320.8213641827,
            "unit": "ns",
            "range": "± 4436.788463232038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915437.6223958333,
            "unit": "ns",
            "range": "± 2509.950411187875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622013.8557692308,
            "unit": "ns",
            "range": "± 1218.673162746257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575284.4278971354,
            "unit": "ns",
            "range": "± 12173.466476256166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2302982.96,
            "unit": "ns",
            "range": "± 59642.65332735406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2449377.7153846156,
            "unit": "ns",
            "range": "± 96929.91309905516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3072515.0625,
            "unit": "ns",
            "range": "± 58615.134783283575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2933448.4905660376,
            "unit": "ns",
            "range": "± 121663.66210876712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6945696.017241379,
            "unit": "ns",
            "range": "± 190327.87856666502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39683.9381443299,
            "unit": "ns",
            "range": "± 5029.915648759333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197070.8142857143,
            "unit": "ns",
            "range": "± 8892.24034883966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190241.82558139536,
            "unit": "ns",
            "range": "± 5650.169920415501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171560.6739130435,
            "unit": "ns",
            "range": "± 4246.489455497585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3062118.5,
            "unit": "ns",
            "range": "± 18893.728315339093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2901227.6842105263,
            "unit": "ns",
            "range": "± 61300.805675376665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12726.935483870968,
            "unit": "ns",
            "range": "± 1377.1748002977092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61092.50515463918,
            "unit": "ns",
            "range": "± 5982.847421872854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52596.362068965514,
            "unit": "ns",
            "range": "± 2154.0451904255965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72278.71578947369,
            "unit": "ns",
            "range": "± 19744.030108053594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3313.625,
            "unit": "ns",
            "range": "± 920.2495799910392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15352.297872340425,
            "unit": "ns",
            "range": "± 1370.4239186359882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5679750.714285715,
            "unit": "ns",
            "range": "± 23678.025240646723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14358808,
            "unit": "ns",
            "range": "± 216044.9206878051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37036653.71428572,
            "unit": "ns",
            "range": "± 363367.22920042847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75423702.2,
            "unit": "ns",
            "range": "± 745727.1232866043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148945707.7857143,
            "unit": "ns",
            "range": "± 1137698.5859855025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010288.1789473684,
            "unit": "ns",
            "range": "± 104473.95914354548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916019,
            "unit": "ns",
            "range": "± 57967.19366388774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524949.4226804124,
            "unit": "ns",
            "range": "± 159587.74968348365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6295877.75,
            "unit": "ns",
            "range": "± 407862.29915943573"
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
          "id": "9184a49017e02fdccf557059daa88da9e19d452c",
          "message": "Changelog",
          "timestamp": "2023-12-19T15:28:48+09:00",
          "tree_id": "77bd1dbc57562835aab336666e502ff4af90e801",
          "url": "https://github.com/greymistcube/libplanet/commit/9184a49017e02fdccf557059daa88da9e19d452c"
        },
        "date": 1702968023214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3762131.679361979,
            "unit": "ns",
            "range": "± 16513.94578538336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191677.9005533855,
            "unit": "ns",
            "range": "± 5683.344810447743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777589.3955829327,
            "unit": "ns",
            "range": "± 1500.670524800077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906913.6411132812,
            "unit": "ns",
            "range": "± 5317.361492949171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613611.5419921875,
            "unit": "ns",
            "range": "± 1008.3060390656586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586063.276936849,
            "unit": "ns",
            "range": "± 1356.425741543777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2501964.4411764704,
            "unit": "ns",
            "range": "± 62014.449864010145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2677126.2118644067,
            "unit": "ns",
            "range": "± 118601.3217872862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3221651.4,
            "unit": "ns",
            "range": "± 47939.60147310364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3064235.75,
            "unit": "ns",
            "range": "± 127786.09191318692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7120899.65625,
            "unit": "ns",
            "range": "± 219356.8425231288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41043.18947368421,
            "unit": "ns",
            "range": "± 5194.089186215048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212810.74074074073,
            "unit": "ns",
            "range": "± 11144.956383694127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214063.60416666666,
            "unit": "ns",
            "range": "± 16576.025258743688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176454.54098360657,
            "unit": "ns",
            "range": "± 7881.781379810383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3197273.4,
            "unit": "ns",
            "range": "± 39704.048566145706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2779436.576923077,
            "unit": "ns",
            "range": "± 23268.31248881025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19663.711340206184,
            "unit": "ns",
            "range": "± 4566.637005588199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75656.01063829787,
            "unit": "ns",
            "range": "± 6414.3117524758745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81494.11,
            "unit": "ns",
            "range": "± 13783.14488742601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95607.67346938775,
            "unit": "ns",
            "range": "± 13840.732196214552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5435.173469387755,
            "unit": "ns",
            "range": "± 1544.9138368894821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18019.927083333332,
            "unit": "ns",
            "range": "± 2460.8561635709407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5894773.266666667,
            "unit": "ns",
            "range": "± 38625.03322322504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14835259.92857143,
            "unit": "ns",
            "range": "± 41787.844915559035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38474993.14285714,
            "unit": "ns",
            "range": "± 182978.78742708324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75216928.14285715,
            "unit": "ns",
            "range": "± 512029.4297285005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149696888.2857143,
            "unit": "ns",
            "range": "± 904371.6501169518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040850.78125,
            "unit": "ns",
            "range": "± 98415.8467539069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1944354.8260869565,
            "unit": "ns",
            "range": "± 38203.3881156349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519603.3901098901,
            "unit": "ns",
            "range": "± 95112.54893399251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6158833.6,
            "unit": "ns",
            "range": "± 298403.4477917633"
          }
        ]
      }
    ]
  }
}