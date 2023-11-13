window.BENCHMARK_DATA = {
  "lastUpdate": 1699884689793,
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
          "id": "ce138e16c5b136bf994e756ba696a86b632dba01",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:46:04+09:00",
          "tree_id": "de06c7658cf66089c6b29abf46d9bd761dbc0c8c",
          "url": "https://github.com/greymistcube/libplanet/commit/ce138e16c5b136bf994e756ba696a86b632dba01"
        },
        "date": 1699884671802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12171949.265306123,
            "unit": "ns",
            "range": "± 1692832.1046797798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31407107.258064516,
            "unit": "ns",
            "range": "± 5381319.833833498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 79714069.38043478,
            "unit": "ns",
            "range": "± 11678975.661567505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 168799406.47802198,
            "unit": "ns",
            "range": "± 31549863.909020104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 337052309.6011236,
            "unit": "ns",
            "range": "± 36469395.24418493"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62477.27777777778,
            "unit": "ns",
            "range": "± 13743.759476824525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 452833.3804347826,
            "unit": "ns",
            "range": "± 143525.3786854775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315942.9010989011,
            "unit": "ns",
            "range": "± 56359.72621376111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 371700.53125,
            "unit": "ns",
            "range": "± 100918.23209394541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6321124.23,
            "unit": "ns",
            "range": "± 1402094.9020064662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5844229.641414141,
            "unit": "ns",
            "range": "± 1276733.1793899073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26544.78888888889,
            "unit": "ns",
            "range": "± 5496.046916953885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128271.74444444444,
            "unit": "ns",
            "range": "± 30455.392657780256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127269.35869565218,
            "unit": "ns",
            "range": "± 30435.592685582298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95496.46067415731,
            "unit": "ns",
            "range": "± 15572.608552764706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8765.747252747253,
            "unit": "ns",
            "range": "± 1438.3524571413611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24194.958333333332,
            "unit": "ns",
            "range": "± 6688.269166260497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1145160.7040816327,
            "unit": "ns",
            "range": "± 123137.60271315361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2375471.989361702,
            "unit": "ns",
            "range": "± 192102.08419156162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1751896,
            "unit": "ns",
            "range": "± 231959.37651925173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9990119.241935484,
            "unit": "ns",
            "range": "± 2194060.9889051076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4441794.153061224,
            "unit": "ns",
            "range": "± 873576.35237272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5019655.5612244895,
            "unit": "ns",
            "range": "± 1133738.894972582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6748708.0322580645,
            "unit": "ns",
            "range": "± 1676681.4177437995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5921894.670212766,
            "unit": "ns",
            "range": "± 1280088.1183726664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18906112.739130434,
            "unit": "ns",
            "range": "± 5181476.885230637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9391294.012564434,
            "unit": "ns",
            "range": "± 2711989.7727398826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2485031.905450994,
            "unit": "ns",
            "range": "± 560732.9621274021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378980.3358972294,
            "unit": "ns",
            "range": "± 187574.81885157566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680587.1900900137,
            "unit": "ns",
            "range": "± 345893.93835416785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788870.7132703993,
            "unit": "ns",
            "range": "± 73021.91974307691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 680207.9746582031,
            "unit": "ns",
            "range": "± 73289.68501652028"
          }
        ]
      }
    ]
  }
}