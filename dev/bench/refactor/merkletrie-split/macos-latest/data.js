window.BENCHMARK_DATA = {
  "lastUpdate": 1703663420550,
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
          "id": "7a3491f87c033eb92dd2e1fd3ae6fec1187f2321",
          "message": "Remove no longer necessary comments",
          "timestamp": "2023-12-27T16:35:51+09:00",
          "tree_id": "e7541ac8b2d46dab6ea0d2bb84a32e1f2d35b86d",
          "url": "https://github.com/greymistcube/libplanet/commit/7a3491f87c033eb92dd2e1fd3ae6fec1187f2321"
        },
        "date": 1703663400774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8336419.8545454545,
            "unit": "ns",
            "range": "± 340131.109008713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19630310.611111112,
            "unit": "ns",
            "range": "± 407604.9846432405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50669808.322222225,
            "unit": "ns",
            "range": "± 3682433.15577804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100711532.875,
            "unit": "ns",
            "range": "± 5249457.3646249715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207236763.42682928,
            "unit": "ns",
            "range": "± 10792931.969110845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35991.545454545456,
            "unit": "ns",
            "range": "± 5246.959754427015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288362.76136363635,
            "unit": "ns",
            "range": "± 62394.51707104242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280596.5232558139,
            "unit": "ns",
            "range": "± 47420.71228506571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249564.83870967742,
            "unit": "ns",
            "range": "± 29874.82536070125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4093409.1228070175,
            "unit": "ns",
            "range": "± 176439.14012011036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3669009.9583333335,
            "unit": "ns",
            "range": "± 179094.26782444966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15699.741573033707,
            "unit": "ns",
            "range": "± 3093.348555324685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86404.91489361702,
            "unit": "ns",
            "range": "± 23733.493697050755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83717.8163265306,
            "unit": "ns",
            "range": "± 21267.398285206073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96053.61458333333,
            "unit": "ns",
            "range": "± 18291.96092297884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6598.425287356322,
            "unit": "ns",
            "range": "± 1552.8459516596206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26849.94,
            "unit": "ns",
            "range": "± 12235.887027919145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030149.8913043478,
            "unit": "ns",
            "range": "± 91236.7092723384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2271987.510638298,
            "unit": "ns",
            "range": "± 161644.97663672376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1539217.852631579,
            "unit": "ns",
            "range": "± 127499.82419236675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7066536.585106383,
            "unit": "ns",
            "range": "± 639326.52332032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2993277.1842105263,
            "unit": "ns",
            "range": "± 152348.51069760724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3048851.426829268,
            "unit": "ns",
            "range": "± 167271.70227057108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6550533.396907217,
            "unit": "ns",
            "range": "± 1246806.7902622072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5976557.21,
            "unit": "ns",
            "range": "± 1195013.8994178623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17249448.386363637,
            "unit": "ns",
            "range": "± 3221135.2501976164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4989691.087611607,
            "unit": "ns",
            "range": "± 45783.2169126838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1445966.6569824219,
            "unit": "ns",
            "range": "± 26315.680256599102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 944336.2595052083,
            "unit": "ns",
            "range": "± 12814.369686286575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2273633.450613839,
            "unit": "ns",
            "range": "± 31003.05930381214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 674985.3593374399,
            "unit": "ns",
            "range": "± 5970.623409527626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 595600.6164202009,
            "unit": "ns",
            "range": "± 6911.482737948311"
          }
        ]
      }
    ]
  }
}