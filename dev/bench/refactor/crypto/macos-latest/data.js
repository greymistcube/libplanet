window.BENCHMARK_DATA = {
  "lastUpdate": 1699884380094,
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
          "id": "d7dd743710bea5b0cd847bab5775c61b6c9911f1",
          "message": "Refactor PrivateKey, PublicKey, and Address API",
          "timestamp": "2023-11-09T11:17:10+09:00",
          "tree_id": "bda7fd877681a41b13a83512f04fc7a10aab41ad",
          "url": "https://github.com/greymistcube/libplanet/commit/d7dd743710bea5b0cd847bab5775c61b6c9911f1"
        },
        "date": 1699884349103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11267504.449494949,
            "unit": "ns",
            "range": "± 1889202.117602066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31356188.10989011,
            "unit": "ns",
            "range": "± 6498159.205540183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56576976.333333336,
            "unit": "ns",
            "range": "± 756435.9896773497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 157522392.10869566,
            "unit": "ns",
            "range": "± 41695637.26213011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 323577616.8556701,
            "unit": "ns",
            "range": "± 82811008.47964916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79517.95833333333,
            "unit": "ns",
            "range": "± 21701.758831906816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332580.3387096774,
            "unit": "ns",
            "range": "± 84732.26203668906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312318.24736842106,
            "unit": "ns",
            "range": "± 70064.068762321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337954.93684210523,
            "unit": "ns",
            "range": "± 94788.15882897745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5999443.675824176,
            "unit": "ns",
            "range": "± 1538020.124111996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4813781.457446809,
            "unit": "ns",
            "range": "± 924170.6658331846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28359.852631578946,
            "unit": "ns",
            "range": "± 6898.502914938372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118275.21276595745,
            "unit": "ns",
            "range": "± 28934.23495753603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115506.44791666667,
            "unit": "ns",
            "range": "± 21635.844892151978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115918.84020618557,
            "unit": "ns",
            "range": "± 26967.12826714784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9556.836842105264,
            "unit": "ns",
            "range": "± 1951.893786407307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28061.63829787234,
            "unit": "ns",
            "range": "± 5326.109669529049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1883907.4894736842,
            "unit": "ns",
            "range": "± 442952.37652535207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3887585.663043478,
            "unit": "ns",
            "range": "± 1007851.0513715683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586501,
            "unit": "ns",
            "range": "± 754016.9356693669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13289427.42631579,
            "unit": "ns",
            "range": "± 3337562.766998727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4307039.715789474,
            "unit": "ns",
            "range": "± 1030210.3043575325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4853769.460674157,
            "unit": "ns",
            "range": "± 1545599.4992555552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4833407.693548387,
            "unit": "ns",
            "range": "± 1175859.9624171392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4391123.295454546,
            "unit": "ns",
            "range": "± 597341.9217919847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14858530.673913043,
            "unit": "ns",
            "range": "± 2458769.6591139217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6328004.944116709,
            "unit": "ns",
            "range": "± 1074714.6370287144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492427.3671459442,
            "unit": "ns",
            "range": "± 99381.6323170513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 890476.4254557291,
            "unit": "ns",
            "range": "± 3361.6479887444902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2025629.3079427083,
            "unit": "ns",
            "range": "± 21125.995510283006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642269.5860648777,
            "unit": "ns",
            "range": "± 13761.386105680498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573582.7180786133,
            "unit": "ns",
            "range": "± 4548.416066270785"
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
          "id": "6216e5db6e1a7793d519c621258ea69263a644af",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:44:41+09:00",
          "tree_id": "8dfcfa63381c04b875930b6fc5ea593aaf97847d",
          "url": "https://github.com/greymistcube/libplanet/commit/6216e5db6e1a7793d519c621258ea69263a644af"
        },
        "date": 1699884365211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8478392.52631579,
            "unit": "ns",
            "range": "± 183484.61186624778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23464554.625,
            "unit": "ns",
            "range": "± 3521161.237222129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55367244.729166664,
            "unit": "ns",
            "range": "± 8069319.620658155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129072262.35542169,
            "unit": "ns",
            "range": "± 23949248.021077696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245841918.3,
            "unit": "ns",
            "range": "± 28845847.765274372"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56178.670454545456,
            "unit": "ns",
            "range": "± 9221.733221812994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315990.9183673469,
            "unit": "ns",
            "range": "± 78143.1456457695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301883.6288659794,
            "unit": "ns",
            "range": "± 81183.69112521916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247413.9,
            "unit": "ns",
            "range": "± 41574.70935882519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3928692.5,
            "unit": "ns",
            "range": "± 135338.61381694395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3688058.4,
            "unit": "ns",
            "range": "± 68725.50689393692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21494.020408163266,
            "unit": "ns",
            "range": "± 8832.282613780104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110006.94565217392,
            "unit": "ns",
            "range": "± 21181.4091990206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104943.19587628866,
            "unit": "ns",
            "range": "± 23907.940489528082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75361.36363636363,
            "unit": "ns",
            "range": "± 13139.944550331595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7922.447916666667,
            "unit": "ns",
            "range": "± 1473.936361332731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17606.15263157895,
            "unit": "ns",
            "range": "± 5091.718973142151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1185065.1609195403,
            "unit": "ns",
            "range": "± 161824.56921918193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2533535.7816091953,
            "unit": "ns",
            "range": "± 252830.96236195113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1988937.1797752809,
            "unit": "ns",
            "range": "± 399090.7173882206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11078023.906976745,
            "unit": "ns",
            "range": "± 3473653.571715693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3708895.744680851,
            "unit": "ns",
            "range": "± 972288.7308531011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3497045.3483146066,
            "unit": "ns",
            "range": "± 675586.3049580628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4590655.760416667,
            "unit": "ns",
            "range": "± 914139.3675356044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4654415.042105263,
            "unit": "ns",
            "range": "± 969226.1922220825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13867144.468421053,
            "unit": "ns",
            "range": "± 3066824.137242672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900850.70859375,
            "unit": "ns",
            "range": "± 316881.4977573009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1472063.5101248205,
            "unit": "ns",
            "range": "± 79902.48076119632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1113908.8973693848,
            "unit": "ns",
            "range": "± 90464.64401566953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2282338.4016644023,
            "unit": "ns",
            "range": "± 217461.51269990517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628202.1350661058,
            "unit": "ns",
            "range": "± 4790.738772258969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578057.1495535715,
            "unit": "ns",
            "range": "± 4380.432203787322"
          }
        ]
      }
    ]
  }
}