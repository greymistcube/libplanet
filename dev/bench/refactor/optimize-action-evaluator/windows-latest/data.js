window.BENCHMARK_DATA = {
  "lastUpdate": 1708395811774,
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
          "id": "c1414e8ce929a1e5b5195134d44aef321b719aba",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T11:07:47+09:00",
          "tree_id": "4652084f03c64430ed32917042b6ade68d9df046",
          "url": "https://github.com/greymistcube/libplanet/commit/c1414e8ce929a1e5b5195134d44aef321b719aba"
        },
        "date": 1708395551034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967969.0721649484,
            "unit": "ns",
            "range": "± 119150.66037097103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692493.3333333333,
            "unit": "ns",
            "range": "± 75538.50262304036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553393.9393939395,
            "unit": "ns",
            "range": "± 170867.97613659702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6808718.571428572,
            "unit": "ns",
            "range": "± 221398.73767033272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34574.71264367816,
            "unit": "ns",
            "range": "± 1646.0819154222365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5328880,
            "unit": "ns",
            "range": "± 48825.05504349176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13196450,
            "unit": "ns",
            "range": "± 139568.56462244366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33240507.692307692,
            "unit": "ns",
            "range": "± 346747.43561065325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65405621.428571425,
            "unit": "ns",
            "range": "± 539670.1259937499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128404828.57142857,
            "unit": "ns",
            "range": "± 573578.2948078887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3256448.5576923075,
            "unit": "ns",
            "range": "± 4291.928943067805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059608.7076822917,
            "unit": "ns",
            "range": "± 3721.0244782059517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736620.3059895834,
            "unit": "ns",
            "range": "± 1165.8613017105401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961489.760044643,
            "unit": "ns",
            "range": "± 4186.285781246055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620823.6258370535,
            "unit": "ns",
            "range": "± 4043.925506818564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564916.6391225961,
            "unit": "ns",
            "range": "± 792.751768433677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113058,
            "unit": "ns",
            "range": "± 83279.15948231966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291372.222222222,
            "unit": "ns",
            "range": "± 94924.84100724937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764496.296296296,
            "unit": "ns",
            "range": "± 76131.54345494322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2790335.3846153845,
            "unit": "ns",
            "range": "± 122008.64906684027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7777862.162162162,
            "unit": "ns",
            "range": "± 241886.8380408852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172165.59139784946,
            "unit": "ns",
            "range": "± 11453.284080233663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162134.66666666666,
            "unit": "ns",
            "range": "± 7631.239021876396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139650,
            "unit": "ns",
            "range": "± 3697.810162785537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2781907.1428571427,
            "unit": "ns",
            "range": "± 34584.22193129992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2550795,
            "unit": "ns",
            "range": "± 56256.073122445145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10786.458333333334,
            "unit": "ns",
            "range": "± 1582.6440096886945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52119.78021978022,
            "unit": "ns",
            "range": "± 3889.564950828756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44024.32432432433,
            "unit": "ns",
            "range": "± 1355.114879387108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54656.12244897959,
            "unit": "ns",
            "range": "± 11561.534752813823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2147.3684210526317,
            "unit": "ns",
            "range": "± 356.9498758730394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9726.595744680852,
            "unit": "ns",
            "range": "± 1314.123079939246"
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
          "id": "dc089524488fc43eba798e13fb800087182dd0d0",
          "message": "Changelog",
          "timestamp": "2024-02-20T11:11:09+09:00",
          "tree_id": "192497160d353fc82748f877c127cb77f44b8b25",
          "url": "https://github.com/greymistcube/libplanet/commit/dc089524488fc43eba798e13fb800087182dd0d0"
        },
        "date": 1708395795281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058347.9797979798,
            "unit": "ns",
            "range": "± 135453.79962412216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837884.9056603773,
            "unit": "ns",
            "range": "± 75954.1825359372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1704887.2340425532,
            "unit": "ns",
            "range": "± 161848.74874303653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6878740.909090909,
            "unit": "ns",
            "range": "± 116104.59430264513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37706.52173913043,
            "unit": "ns",
            "range": "± 2709.1949393320583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5121584.615384615,
            "unit": "ns",
            "range": "± 70985.935768454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13649278.57142857,
            "unit": "ns",
            "range": "± 140707.36369430774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34686586.666666664,
            "unit": "ns",
            "range": "± 313997.91597731225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66765221.428571425,
            "unit": "ns",
            "range": "± 524970.3173712577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134798169.23076922,
            "unit": "ns",
            "range": "± 507408.9711212829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336698.6177884615,
            "unit": "ns",
            "range": "± 7541.132107806598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077458.2161458333,
            "unit": "ns",
            "range": "± 2775.636489973146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760373.6118861607,
            "unit": "ns",
            "range": "± 1292.0166919959158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945112.7473958333,
            "unit": "ns",
            "range": "± 3138.643683536477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648597.3214285715,
            "unit": "ns",
            "range": "± 695.6714520224347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560242.05078125,
            "unit": "ns",
            "range": "± 820.203492106157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200051.3513513515,
            "unit": "ns",
            "range": "± 35722.19681578031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2349252.0833333335,
            "unit": "ns",
            "range": "± 92529.1075297294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2890325,
            "unit": "ns",
            "range": "± 117103.69573824541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3098168.9655172415,
            "unit": "ns",
            "range": "± 90389.22226937818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8047003.125,
            "unit": "ns",
            "range": "± 245399.75087977338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181426.7857142857,
            "unit": "ns",
            "range": "± 7409.109652593612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177208.0459770115,
            "unit": "ns",
            "range": "± 9712.892635394399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147864.2857142857,
            "unit": "ns",
            "range": "± 7168.005315779232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2931447.0588235296,
            "unit": "ns",
            "range": "± 59221.576701898295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2588625,
            "unit": "ns",
            "range": "± 50313.835075454146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13564.21052631579,
            "unit": "ns",
            "range": "± 2048.503127063795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60718.085106382976,
            "unit": "ns",
            "range": "± 7269.777810362148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46144.8717948718,
            "unit": "ns",
            "range": "± 2390.2207383744244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67920.40816326531,
            "unit": "ns",
            "range": "± 13006.10450791706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3453.061224489796,
            "unit": "ns",
            "range": "± 799.2527543181087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11340.697674418605,
            "unit": "ns",
            "range": "± 1202.583288736156"
          }
        ]
      }
    ]
  }
}