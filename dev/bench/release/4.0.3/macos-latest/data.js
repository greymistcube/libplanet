window.BENCHMARK_DATA = {
  "lastUpdate": 1707211684514,
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
          "id": "aac31ffda5d567b4aee940afd7eb9984121c41f4",
          "message": "Release 4.0.3",
          "timestamp": "2024-02-06T18:13:39+09:00",
          "tree_id": "52802fbf3945f1888b4771fd252a9ead9b4186dc",
          "url": "https://github.com/greymistcube/libplanet/commit/aac31ffda5d567b4aee940afd7eb9984121c41f4"
        },
        "date": 1707211666661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7900867.807692308,
            "unit": "ns",
            "range": "± 121620.78575938723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19413871.166666668,
            "unit": "ns",
            "range": "± 293337.8121361267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48307534.64285714,
            "unit": "ns",
            "range": "± 632449.3808839088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98312287.4,
            "unit": "ns",
            "range": "± 1748568.4088320364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203828227.15384614,
            "unit": "ns",
            "range": "± 5437500.252524611"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43325.53157894737,
            "unit": "ns",
            "range": "± 8276.26646405845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218618.53260869565,
            "unit": "ns",
            "range": "± 12395.464903090973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221878.69587628866,
            "unit": "ns",
            "range": "± 13498.465649410535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203094.10824742267,
            "unit": "ns",
            "range": "± 19890.73872515627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3898528.125,
            "unit": "ns",
            "range": "± 101068.07468249889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3536114.272727273,
            "unit": "ns",
            "range": "± 84648.2738771114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12019.627906976744,
            "unit": "ns",
            "range": "± 777.2199937864762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58444.52173913043,
            "unit": "ns",
            "range": "± 4304.115801728277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60127.17894736842,
            "unit": "ns",
            "range": "± 9776.239325015402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65706.09090909091,
            "unit": "ns",
            "range": "± 10430.920082972812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3265.8977272727275,
            "unit": "ns",
            "range": "± 364.7780632070331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13909.715789473685,
            "unit": "ns",
            "range": "± 2253.443698757847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1069012.6979166667,
            "unit": "ns",
            "range": "± 66691.68840538089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2358487.0967741935,
            "unit": "ns",
            "range": "± 133814.8725553382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1854161.7252747254,
            "unit": "ns",
            "range": "± 158657.83536431586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19177986.258241758,
            "unit": "ns",
            "range": "± 2072598.6841908304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2972446.623076923,
            "unit": "ns",
            "range": "± 134292.6374051631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3124595.22,
            "unit": "ns",
            "range": "± 82463.8702450554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3632103.6428571427,
            "unit": "ns",
            "range": "± 26143.935033129263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3812937.5934065934,
            "unit": "ns",
            "range": "± 247431.04671901255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21934154.92105263,
            "unit": "ns",
            "range": "± 2209942.401726097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4276611.486458333,
            "unit": "ns",
            "range": "± 55377.11840015581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1354130.7587139423,
            "unit": "ns",
            "range": "± 12713.950905271386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 874461.743359375,
            "unit": "ns",
            "range": "± 8711.578192792007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2202630.6845703125,
            "unit": "ns",
            "range": "± 177512.27660118794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 681959.8383789062,
            "unit": "ns",
            "range": "± 11186.086671134155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582641.5069110577,
            "unit": "ns",
            "range": "± 6305.24795018275"
          }
        ]
      }
    ]
  }
}