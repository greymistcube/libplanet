window.BENCHMARK_DATA = {
  "lastUpdate": 1695633278170,
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
          "id": "9e2337db7082191af93ca9d37398767723023f8a",
          "message": "Prepare 3.5.0",
          "timestamp": "2023-09-25T17:56:05+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/greymistcube/libplanet/commit/9e2337db7082191af93ca9d37398767723023f8a"
        },
        "date": 1695633261417,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9142112,
            "unit": "ns",
            "range": "± 308809.3340254181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21921303.168539327,
            "unit": "ns",
            "range": "± 1242115.456294104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58145428.974358976,
            "unit": "ns",
            "range": "± 1979584.1314144148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106663852.875,
            "unit": "ns",
            "range": "± 1991028.593379408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224267829.34615386,
            "unit": "ns",
            "range": "± 9196582.884918323"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72721.18131868132,
            "unit": "ns",
            "range": "± 9714.641456046436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337653.9680851064,
            "unit": "ns",
            "range": "± 46943.29469030365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318748.4555555555,
            "unit": "ns",
            "range": "± 24775.836525367016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292254.7921348315,
            "unit": "ns",
            "range": "± 18457.52280434128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4203332.215909091,
            "unit": "ns",
            "range": "± 241583.32667037533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3611114.790909091,
            "unit": "ns",
            "range": "± 144504.90045165748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18140.813186813186,
            "unit": "ns",
            "range": "± 1901.2197658467571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90461.02040816327,
            "unit": "ns",
            "range": "± 9819.259652503875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101811.72448979592,
            "unit": "ns",
            "range": "± 17582.239233075084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119563.06842105264,
            "unit": "ns",
            "range": "± 21864.6082666071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7734.844086021505,
            "unit": "ns",
            "range": "± 1625.3152570088464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20180.67021276596,
            "unit": "ns",
            "range": "± 3904.134148465023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533038.375,
            "unit": "ns",
            "range": "± 189667.95479553484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2948836.712765957,
            "unit": "ns",
            "range": "± 113928.04752999687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2429540.4139784947,
            "unit": "ns",
            "range": "± 264396.57541834586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11073433.35443038,
            "unit": "ns",
            "range": "± 860047.3340319785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3427286.565217391,
            "unit": "ns",
            "range": "± 317297.3432816608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3460071.244680851,
            "unit": "ns",
            "range": "± 227854.36660414014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4331389.409090909,
            "unit": "ns",
            "range": "± 159883.9495257264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4211672.595744681,
            "unit": "ns",
            "range": "± 269998.7890068947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15753569.285714285,
            "unit": "ns",
            "range": "± 1626496.4217968443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6288289.886029412,
            "unit": "ns",
            "range": "± 125855.15650153783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863021.656600561,
            "unit": "ns",
            "range": "± 64491.169551692205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1025241.0743689904,
            "unit": "ns",
            "range": "± 16034.980353079234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2926102.0555098685,
            "unit": "ns",
            "range": "± 61992.80006220825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864408.5761067708,
            "unit": "ns",
            "range": "± 9786.638474006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 818192.2143554688,
            "unit": "ns",
            "range": "± 12456.574402143908"
          }
        ]
      }
    ]
  }
}