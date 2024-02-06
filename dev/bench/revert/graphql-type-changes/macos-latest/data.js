window.BENCHMARK_DATA = {
  "lastUpdate": 1707208869890,
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
          "id": "40ab0cee84b3b942a8ca8b05d223d94cc787bbd3",
          "message": "Use IDGraphType for legacy queries",
          "timestamp": "2024-02-06T17:01:43+09:00",
          "tree_id": "443a9a9a1176659d366f0d228e4fd11922a4db79",
          "url": "https://github.com/greymistcube/libplanet/commit/40ab0cee84b3b942a8ca8b05d223d94cc787bbd3"
        },
        "date": 1707207688462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7649654.666666667,
            "unit": "ns",
            "range": "± 61887.409470502935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18997886.666666668,
            "unit": "ns",
            "range": "± 156392.86273666614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48693521.663157895,
            "unit": "ns",
            "range": "± 2871395.096496362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94767216.96428572,
            "unit": "ns",
            "range": "± 2672026.9502213523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206392449.5609756,
            "unit": "ns",
            "range": "± 10944091.084842952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39692.163043478264,
            "unit": "ns",
            "range": "± 8267.243746916316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273164.9574468085,
            "unit": "ns",
            "range": "± 39430.13750979294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245020.36559139786,
            "unit": "ns",
            "range": "± 26366.281813918642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259109.4693877551,
            "unit": "ns",
            "range": "± 40692.1014781787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069616.26,
            "unit": "ns",
            "range": "± 162389.46958187924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3506671.777777778,
            "unit": "ns",
            "range": "± 64332.22293921339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19260.94382022472,
            "unit": "ns",
            "range": "± 7280.582026495907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88855.73195876289,
            "unit": "ns",
            "range": "± 23342.90958572658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79011.26,
            "unit": "ns",
            "range": "± 25803.409780989343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92048.25263157894,
            "unit": "ns",
            "range": "± 17570.183425197152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5245.364583333333,
            "unit": "ns",
            "range": "± 1780.5546393117409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15788.326086956522,
            "unit": "ns",
            "range": "± 3838.4720163069223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070199.5,
            "unit": "ns",
            "range": "± 84803.95244019288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2211530.1636363636,
            "unit": "ns",
            "range": "± 93333.13500986143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1828621.0721649486,
            "unit": "ns",
            "range": "± 179700.100014942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19067827.786516853,
            "unit": "ns",
            "range": "± 2118365.2935794806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3143365.489361702,
            "unit": "ns",
            "range": "± 193837.11453984835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3254424.0625,
            "unit": "ns",
            "range": "± 219074.64809361997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3799427.7702702703,
            "unit": "ns",
            "range": "± 189858.74738158015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4023995.7934782607,
            "unit": "ns",
            "range": "± 318756.7705094187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23729056.291666668,
            "unit": "ns",
            "range": "± 3388544.213186942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4989616.122861842,
            "unit": "ns",
            "range": "± 378555.9967649717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1451286.7186465992,
            "unit": "ns",
            "range": "± 78301.8790017022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 945497.4862985322,
            "unit": "ns",
            "range": "± 29209.70128451947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2284310.197832661,
            "unit": "ns",
            "range": "± 186455.16086438543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 683007.5632629395,
            "unit": "ns",
            "range": "± 19792.862050832937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 623704.8206630609,
            "unit": "ns",
            "range": "± 21786.070673359118"
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
          "id": "821612336001a189e8158560c8bd7ab6c30fdbf5",
          "message": "Use IDGraphType for legacy queries",
          "timestamp": "2024-02-06T17:05:31+09:00",
          "tree_id": "3b657185cdafd5d397b3874c403f15af42c58d29",
          "url": "https://github.com/greymistcube/libplanet/commit/821612336001a189e8158560c8bd7ab6c30fdbf5"
        },
        "date": 1707207999475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8657522,
            "unit": "ns",
            "range": "± 53772.504695919895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22366300.94117647,
            "unit": "ns",
            "range": "± 715402.4315810347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55314085.23913044,
            "unit": "ns",
            "range": "± 2006256.427520021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109097559.36666666,
            "unit": "ns",
            "range": "± 1567730.3505129803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216224359.2857143,
            "unit": "ns",
            "range": "± 6018546.41081728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78839.72471910113,
            "unit": "ns",
            "range": "± 7379.763310371768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385053.1530612245,
            "unit": "ns",
            "range": "± 74184.10341249335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346725.3085106383,
            "unit": "ns",
            "range": "± 44124.93269038128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336174.55319148937,
            "unit": "ns",
            "range": "± 47806.351505034836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4688513.664948453,
            "unit": "ns",
            "range": "± 303760.31247939006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4146077.025252525,
            "unit": "ns",
            "range": "± 355970.7560886044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22502.03370786517,
            "unit": "ns",
            "range": "± 4142.081910787019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108359.5,
            "unit": "ns",
            "range": "± 15082.646165076905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111793.22826086957,
            "unit": "ns",
            "range": "± 15638.722011600426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115032.6129032258,
            "unit": "ns",
            "range": "± 17822.553249374465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8395.554347826086,
            "unit": "ns",
            "range": "± 925.7331916209989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21209.41379310345,
            "unit": "ns",
            "range": "± 2331.6154223943263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583836.302197802,
            "unit": "ns",
            "range": "± 189503.23230554492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3142708.2608695654,
            "unit": "ns",
            "range": "± 309004.6722977199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2705616.5056179776,
            "unit": "ns",
            "range": "± 276060.4860743682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 37449009.47938144,
            "unit": "ns",
            "range": "± 12491557.336840488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3481065.8080808083,
            "unit": "ns",
            "range": "± 305724.5848129565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3482830.59375,
            "unit": "ns",
            "range": "± 268471.7050256126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4342842.695652174,
            "unit": "ns",
            "range": "± 209347.77662416082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4692476.668421052,
            "unit": "ns",
            "range": "± 497977.71609556844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34143047.2628866,
            "unit": "ns",
            "range": "± 5177115.054729817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7027997.33117378,
            "unit": "ns",
            "range": "± 249524.36816444775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2071904.6401742788,
            "unit": "ns",
            "range": "± 33506.55967784314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236138.6973772321,
            "unit": "ns",
            "range": "± 40078.6301158152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3177639.7488692435,
            "unit": "ns",
            "range": "± 107108.36371800958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965325.4613470262,
            "unit": "ns",
            "range": "± 28814.71086972996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845680.7992621528,
            "unit": "ns",
            "range": "± 17736.47556233886"
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
          "id": "56dd7505d467e709c43a9af85f1c983e9a5dc996",
          "message": "Changelog",
          "timestamp": "2024-02-06T17:12:33+09:00",
          "tree_id": "5b637c52617f362907427984fcbdbec649c027cd",
          "url": "https://github.com/greymistcube/libplanet/commit/56dd7505d467e709c43a9af85f1c983e9a5dc996"
        },
        "date": 1707208847956,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9831129.114942528,
            "unit": "ns",
            "range": "± 1264207.3273242181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28749065.677083332,
            "unit": "ns",
            "range": "± 5940796.506485317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73342949.92473118,
            "unit": "ns",
            "range": "± 13318731.390863616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 159889062.87373737,
            "unit": "ns",
            "range": "± 43215870.166123055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248087982.9375,
            "unit": "ns",
            "range": "± 4766235.242250364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66631.27710843373,
            "unit": "ns",
            "range": "± 10295.055822961049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305738.92045454547,
            "unit": "ns",
            "range": "± 25130.890997016886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332248.5056179775,
            "unit": "ns",
            "range": "± 56466.60477886738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 424438.0505050505,
            "unit": "ns",
            "range": "± 110827.36907676289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6908585.091836735,
            "unit": "ns",
            "range": "± 1314826.1040505802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5074365.153846154,
            "unit": "ns",
            "range": "± 37570.10378578104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27152.261363636364,
            "unit": "ns",
            "range": "± 2945.2389224329854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114837.76530612246,
            "unit": "ns",
            "range": "± 27445.282555430975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119541.61224489796,
            "unit": "ns",
            "range": "± 20054.41890458742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116848.1914893617,
            "unit": "ns",
            "range": "± 19841.59370673517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7442.854166666667,
            "unit": "ns",
            "range": "± 2113.058461737228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20507.81182795699,
            "unit": "ns",
            "range": "± 2455.9968886225806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2109891.4831460672,
            "unit": "ns",
            "range": "± 686296.2279955772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4699604.635416667,
            "unit": "ns",
            "range": "± 1277274.2015712464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4137097.147368421,
            "unit": "ns",
            "range": "± 1474092.4122126515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 34837252.483516484,
            "unit": "ns",
            "range": "± 8860183.689471085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3931413.8448275863,
            "unit": "ns",
            "range": "± 361597.60667988926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4937374.102040816,
            "unit": "ns",
            "range": "± 1159678.0654860884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4993289.3132530125,
            "unit": "ns",
            "range": "± 609325.4446964768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6248235.625,
            "unit": "ns",
            "range": "± 1439609.1808227692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29681698.076086957,
            "unit": "ns",
            "range": "± 5428386.160229137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5359273.19786352,
            "unit": "ns",
            "range": "± 490186.3873247673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1474650.2218133223,
            "unit": "ns",
            "range": "± 100337.51181416924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1109727.142578125,
            "unit": "ns",
            "range": "± 169679.57439775835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2989974.606617647,
            "unit": "ns",
            "range": "± 59976.48750027091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903547.1344168527,
            "unit": "ns",
            "range": "± 14085.225632761969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 660379.4400660738,
            "unit": "ns",
            "range": "± 50812.941695964146"
          }
        ]
      }
    ]
  }
}