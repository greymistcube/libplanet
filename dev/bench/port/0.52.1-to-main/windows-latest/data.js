window.BENCHMARK_DATA = {
  "lastUpdate": 1678875761332,
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
          "id": "68acfb8925fe50521ddaef75a175c2f8f9c71bff",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:05:13+09:00",
          "tree_id": "46822b9066409fc5abf66ab11c15e867f0f9faca",
          "url": "https://github.com/greymistcube/libplanet/commit/68acfb8925fe50521ddaef75a175c2f8f9c71bff"
        },
        "date": 1678875730152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1236040.7894736843,
            "unit": "ns",
            "range": "± 62905.27095589914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2308878.5714285714,
            "unit": "ns",
            "range": "± 38915.454287693756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026748.9795918367,
            "unit": "ns",
            "range": "± 134388.5191194284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5012385.074626866,
            "unit": "ns",
            "range": "± 236766.94157407794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47709.230769230766,
            "unit": "ns",
            "range": "± 2241.631874670429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6823846.153846154,
            "unit": "ns",
            "range": "± 30925.572357533267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18828892.307692308,
            "unit": "ns",
            "range": "± 194544.54272110562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46653108.69565217,
            "unit": "ns",
            "range": "± 1150856.6295325975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95188715,
            "unit": "ns",
            "range": "± 2148526.9703670787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 186236453.33333334,
            "unit": "ns",
            "range": "± 2387700.5524941674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4662119.583333333,
            "unit": "ns",
            "range": "± 23708.71604140227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1482020.6752232143,
            "unit": "ns",
            "range": "± 6041.411135218267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1123177.4609375,
            "unit": "ns",
            "range": "± 2965.6699898181446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655606.3802083335,
            "unit": "ns",
            "range": "± 8789.349864680511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817280.8333333334,
            "unit": "ns",
            "range": "± 2396.941410328144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772146.484375,
            "unit": "ns",
            "range": "± 2187.9243755138177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2973036.3636363638,
            "unit": "ns",
            "range": "± 92851.87739816376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4675843.478260869,
            "unit": "ns",
            "range": "± 116130.83462624447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22015223.529411763,
            "unit": "ns",
            "range": "± 426571.64481686393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5757692.156862745,
            "unit": "ns",
            "range": "± 234645.8112501796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25313400,
            "unit": "ns",
            "range": "± 561148.4850039446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175168.88888888888,
            "unit": "ns",
            "range": "± 6637.593424174644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175852.1739130435,
            "unit": "ns",
            "range": "± 6694.026827633881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144871.42857142858,
            "unit": "ns",
            "range": "± 2452.448877042189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10395285.714285715,
            "unit": "ns",
            "range": "± 179505.98814585485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8459722.222222222,
            "unit": "ns",
            "range": "± 177935.37344829165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19783.505154639177,
            "unit": "ns",
            "range": "± 2362.2323663385273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47858.51063829787,
            "unit": "ns",
            "range": "± 4305.345753714258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37144.73684210526,
            "unit": "ns",
            "range": "± 1220.0348618016535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84669.23076923077,
            "unit": "ns",
            "range": "± 4295.55214515762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5239.583333333333,
            "unit": "ns",
            "range": "± 748.9612689960277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18059.574468085106,
            "unit": "ns",
            "range": "± 1291.2708709394828"
          }
        ]
      }
    ]
  }
}