window.BENCHMARK_DATA = {
  "lastUpdate": 1703663284251,
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
        "date": 1703663261327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040307.1428571428,
            "unit": "ns",
            "range": "± 134624.9170806395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1778948.6486486488,
            "unit": "ns",
            "range": "± 75949.03345718324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439987.7551020407,
            "unit": "ns",
            "range": "± 196060.2875223896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5231509.523809524,
            "unit": "ns",
            "range": "± 190653.03028240928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34477.90697674418,
            "unit": "ns",
            "range": "± 2151.6287216782434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5181430.769230769,
            "unit": "ns",
            "range": "± 20150.367433183637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12916913.333333334,
            "unit": "ns",
            "range": "± 117541.5663053875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31862538.46153846,
            "unit": "ns",
            "range": "± 244911.15238817228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68210813.79310344,
            "unit": "ns",
            "range": "± 1944933.7452402804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132493242.85714285,
            "unit": "ns",
            "range": "± 2151007.8613432446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3358284.4587053573,
            "unit": "ns",
            "range": "± 27403.41609848459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035264.7916666666,
            "unit": "ns",
            "range": "± 4205.366272968582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735129.58984375,
            "unit": "ns",
            "range": "± 2464.502015746244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987908.091517857,
            "unit": "ns",
            "range": "± 4531.70019737138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653814.6554129465,
            "unit": "ns",
            "range": "± 880.5074669292895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593174.3489583334,
            "unit": "ns",
            "range": "± 1224.0584320290516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2107717.2413793104,
            "unit": "ns",
            "range": "± 55302.228506928295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277800,
            "unit": "ns",
            "range": "± 73331.17053087706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2882435.1063829786,
            "unit": "ns",
            "range": "± 110735.68015917239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2742853.3333333335,
            "unit": "ns",
            "range": "± 81539.21199002369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6157024.390243903,
            "unit": "ns",
            "range": "± 218371.05437819342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175882.71604938273,
            "unit": "ns",
            "range": "± 8891.397389098309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169797.7011494253,
            "unit": "ns",
            "range": "± 9423.99185912279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142840.9090909091,
            "unit": "ns",
            "range": "± 3369.422600091692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730428.5714285714,
            "unit": "ns",
            "range": "± 47609.6698091959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2568181.8181818184,
            "unit": "ns",
            "range": "± 80823.8302364526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11612.5,
            "unit": "ns",
            "range": "± 1673.2728723263153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54839.13043478261,
            "unit": "ns",
            "range": "± 4377.513884269887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45256.98924731183,
            "unit": "ns",
            "range": "± 3144.574273026283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66572.44897959183,
            "unit": "ns",
            "range": "± 14101.58125674809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2565.3061224489797,
            "unit": "ns",
            "range": "± 695.063898392606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10864.130434782608,
            "unit": "ns",
            "range": "± 1342.5072101010985"
          }
        ]
      }
    ]
  }
}