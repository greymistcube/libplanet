window.BENCHMARK_DATA = {
  "lastUpdate": 1701061299040,
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
          "id": "4a56d8893481517f81dc94973411460905ab698b",
          "message": "Better readability; test fix",
          "timestamp": "2023-11-27T13:27:12+09:00",
          "tree_id": "08072e7d8152ced75702896a41267846d5496111",
          "url": "https://github.com/greymistcube/libplanet/commit/4a56d8893481517f81dc94973411460905ab698b"
        },
        "date": 1701059972450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942940.4255319149,
            "unit": "ns",
            "range": "± 94859.97639888819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755507.9545454546,
            "unit": "ns",
            "range": "± 96401.07575780615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1289212.087912088,
            "unit": "ns",
            "range": "± 103713.25944927285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5146044.086021505,
            "unit": "ns",
            "range": "± 303348.5670709399"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34137.63440860215,
            "unit": "ns",
            "range": "± 2173.4021606335673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5160600,
            "unit": "ns",
            "range": "± 50813.00452218338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13007235.714285715,
            "unit": "ns",
            "range": "± 171538.13483682487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33261392.85714286,
            "unit": "ns",
            "range": "± 386098.1694899841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64352878.94736842,
            "unit": "ns",
            "range": "± 1417124.6411029103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130281985.71428572,
            "unit": "ns",
            "range": "± 1375196.3628219357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3278519.765625,
            "unit": "ns",
            "range": "± 8046.062759425029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044655.2433894231,
            "unit": "ns",
            "range": "± 2667.378815107552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722853.84765625,
            "unit": "ns",
            "range": "± 1536.9803357015624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1888819.9497767857,
            "unit": "ns",
            "range": "± 2559.8654904437085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610306.1662946428,
            "unit": "ns",
            "range": "± 1289.760141301409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551221.34765625,
            "unit": "ns",
            "range": "± 983.4146760943827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2087560.606060606,
            "unit": "ns",
            "range": "± 58577.44840910376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2264407.1428571427,
            "unit": "ns",
            "range": "± 52325.209712227355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2748947.8260869565,
            "unit": "ns",
            "range": "± 67707.31039867796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2593357.6923076925,
            "unit": "ns",
            "range": "± 99672.34231230404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5918648.076923077,
            "unit": "ns",
            "range": "± 240460.43944359277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171217.07317073172,
            "unit": "ns",
            "range": "± 8946.077212988539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167491.30434782608,
            "unit": "ns",
            "range": "± 11854.351008824584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142423.80952380953,
            "unit": "ns",
            "range": "± 3212.1495547226255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2722273.3333333335,
            "unit": "ns",
            "range": "± 35453.882855391304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2432860,
            "unit": "ns",
            "range": "± 45052.56929410353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10650,
            "unit": "ns",
            "range": "± 1431.091184384132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54222.10526315789,
            "unit": "ns",
            "range": "± 5400.377822624974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43903.27868852459,
            "unit": "ns",
            "range": "± 1971.6293780453736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57667.708333333336,
            "unit": "ns",
            "range": "± 13782.250177534159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2304.1237113402062,
            "unit": "ns",
            "range": "± 438.25352389085145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9730.232558139534,
            "unit": "ns",
            "range": "± 925.7200399360821"
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
          "id": "4c2287d9d7d61d7c5526bbf27ca27359c2b9c4a0",
          "message": "Updated description",
          "timestamp": "2023-11-27T13:47:18+09:00",
          "tree_id": "e17bca4417313edd56dde3daef28ae3f0c9dc05d",
          "url": "https://github.com/greymistcube/libplanet/commit/4c2287d9d7d61d7c5526bbf27ca27359c2b9c4a0"
        },
        "date": 1701061271550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973087.8787878788,
            "unit": "ns",
            "range": "± 104852.7697343506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1783473.7704918033,
            "unit": "ns",
            "range": "± 76552.47851776658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1400098.9583333333,
            "unit": "ns",
            "range": "± 168951.28260430682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5099294.444444444,
            "unit": "ns",
            "range": "± 247171.70167627643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36021.59090909091,
            "unit": "ns",
            "range": "± 2936.510121349826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5325450,
            "unit": "ns",
            "range": "± 44546.81325783666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13973528.57142857,
            "unit": "ns",
            "range": "± 174322.03368642597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35104292.307692304,
            "unit": "ns",
            "range": "± 181896.5798722746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69465740,
            "unit": "ns",
            "range": "± 427521.11359724513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 141230020,
            "unit": "ns",
            "range": "± 1042182.8871583501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3362067.0833333335,
            "unit": "ns",
            "range": "± 8981.631560788126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061294.8521205357,
            "unit": "ns",
            "range": "± 2817.174133747837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754423.4026227678,
            "unit": "ns",
            "range": "± 1569.9704965845926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919263.2682291667,
            "unit": "ns",
            "range": "± 4650.17048950483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602454.4782366072,
            "unit": "ns",
            "range": "± 922.7179659617127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583645.0520833334,
            "unit": "ns",
            "range": "± 1628.5478343226491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2326430.769230769,
            "unit": "ns",
            "range": "± 31116.913530944992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2466632.8125,
            "unit": "ns",
            "range": "± 112763.59321105837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2942500,
            "unit": "ns",
            "range": "± 74607.73942835083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2822948.3870967743,
            "unit": "ns",
            "range": "± 117117.19049239228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6077733.823529412,
            "unit": "ns",
            "range": "± 290019.12217464804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196182.96703296702,
            "unit": "ns",
            "range": "± 11184.831543409882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188192.98245614034,
            "unit": "ns",
            "range": "± 8177.797897118471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165406.1855670103,
            "unit": "ns",
            "range": "± 11034.697307744313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2889685.714285714,
            "unit": "ns",
            "range": "± 44173.884682152275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2636615.3846153845,
            "unit": "ns",
            "range": "± 21859.888919885747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15033.684210526315,
            "unit": "ns",
            "range": "± 2186.1075155236285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71569.69696969698,
            "unit": "ns",
            "range": "± 9717.178713604766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65340,
            "unit": "ns",
            "range": "± 8417.070197347217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84090.8163265306,
            "unit": "ns",
            "range": "± 18950.755971835544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4872.727272727273,
            "unit": "ns",
            "range": "± 1158.5369187936103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15033.333333333334,
            "unit": "ns",
            "range": "± 2407.8825865736558"
          }
        ]
      }
    ]
  }
}