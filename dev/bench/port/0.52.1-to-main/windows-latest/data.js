window.BENCHMARK_DATA = {
  "lastUpdate": 1678875536521,
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
          "id": "cb7793374dd1cec07f6eb01fe5cbef40dae6b55b",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:04:12+09:00",
          "tree_id": "46822b9066409fc5abf66ab11c15e867f0f9faca",
          "url": "https://github.com/greymistcube/libplanet/commit/cb7793374dd1cec07f6eb01fe5cbef40dae6b55b"
        },
        "date": 1678875513911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297222.448979592,
            "unit": "ns",
            "range": "± 109611.70410323387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2292040.7407407407,
            "unit": "ns",
            "range": "± 56456.404278395064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2206511.7647058824,
            "unit": "ns",
            "range": "± 42255.974168644796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4709794.827586207,
            "unit": "ns",
            "range": "± 137663.081434885"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44707.692307692305,
            "unit": "ns",
            "range": "± 704.1088202609244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7152313.333333333,
            "unit": "ns",
            "range": "± 71187.42732761038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17947273.333333332,
            "unit": "ns",
            "range": "± 100032.60516070794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46030000,
            "unit": "ns",
            "range": "± 151506.37421762635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91950800,
            "unit": "ns",
            "range": "± 315356.0649366168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 183240853.33333334,
            "unit": "ns",
            "range": "± 947038.6716094594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4826949.729567308,
            "unit": "ns",
            "range": "± 4862.719657230788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519294.419642857,
            "unit": "ns",
            "range": "± 1612.3848784073095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134133.828125,
            "unit": "ns",
            "range": "± 1367.0908770863336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2717902.0833333335,
            "unit": "ns",
            "range": "± 42502.94462749334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826855.9779575893,
            "unit": "ns",
            "range": "± 1608.8566465353051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730037.7232142857,
            "unit": "ns",
            "range": "± 897.8988177145359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2929860,
            "unit": "ns",
            "range": "± 50269.45678753935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4631300,
            "unit": "ns",
            "range": "± 64342.49873028824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21392400,
            "unit": "ns",
            "range": "± 261108.1090571195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5697185.714285715,
            "unit": "ns",
            "range": "± 96752.80840402482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24961011.76470588,
            "unit": "ns",
            "range": "± 504921.7425531814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178222.97297297296,
            "unit": "ns",
            "range": "± 4732.960586769756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177053.57142857142,
            "unit": "ns",
            "range": "± 5069.405848950709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151133.8028169014,
            "unit": "ns",
            "range": "± 7419.394346902521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10480040,
            "unit": "ns",
            "range": "± 80611.86371390114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8572180,
            "unit": "ns",
            "range": "± 65248.5599184271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17453.125,
            "unit": "ns",
            "range": "± 1602.7576974833423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48584.444444444445,
            "unit": "ns",
            "range": "± 4070.085748789193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34835.38461538462,
            "unit": "ns",
            "range": "± 1637.8750304539767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84367.02127659574,
            "unit": "ns",
            "range": "± 12097.954935130387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4614.736842105263,
            "unit": "ns",
            "range": "± 718.4451919534192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18107.731958762888,
            "unit": "ns",
            "range": "± 1571.2809962168335"
          }
        ]
      }
    ]
  }
}