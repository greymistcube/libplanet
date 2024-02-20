window.BENCHMARK_DATA = {
  "lastUpdate": 1708406392744,
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
          "id": "8d7011805c070fbcc6b5c5fc848f277f3350c9d5",
          "message": "Merge tag '4.0.5' into merge/4.0.5-to-main\n\nLibplanet 4.0.5",
          "timestamp": "2024-02-20T13:55:48+09:00",
          "tree_id": "582c9dc7cca98549a9bea3dad1243171b27a778e",
          "url": "https://github.com/greymistcube/libplanet/commit/8d7011805c070fbcc6b5c5fc848f277f3350c9d5"
        },
        "date": 1708406374032,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7996990.851851852,
            "unit": "ns",
            "range": "± 195611.68719620627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20294118.036585364,
            "unit": "ns",
            "range": "± 698480.282069512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52421584.788461536,
            "unit": "ns",
            "range": "± 2143329.5932706427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100692615.79411764,
            "unit": "ns",
            "range": "± 1970091.5096201357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237469187.53333333,
            "unit": "ns",
            "range": "± 10429016.129077192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77320.43333333333,
            "unit": "ns",
            "range": "± 9834.881240093424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312472.2181818182,
            "unit": "ns",
            "range": "± 13173.665679414999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320987.8043478261,
            "unit": "ns",
            "range": "± 32422.825838210432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325436.47777777776,
            "unit": "ns",
            "range": "± 42866.65036829042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4795286.872340426,
            "unit": "ns",
            "range": "± 451430.2944116166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4431825.711340206,
            "unit": "ns",
            "range": "± 521630.77565867413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23964.960674157304,
            "unit": "ns",
            "range": "± 4432.234638152684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90244.66666666667,
            "unit": "ns",
            "range": "± 15254.547253483857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77252.37912087912,
            "unit": "ns",
            "range": "± 7711.748350313256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122027.3085106383,
            "unit": "ns",
            "range": "± 25256.326727030348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7895.101123595506,
            "unit": "ns",
            "range": "± 1343.0871074856527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22443.563829787236,
            "unit": "ns",
            "range": "± 4335.487871887061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534082.298969072,
            "unit": "ns",
            "range": "± 189328.17840443333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3114085.0164835164,
            "unit": "ns",
            "range": "± 338070.2271591367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619539.6701030927,
            "unit": "ns",
            "range": "± 201206.46041787535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18360649.86868687,
            "unit": "ns",
            "range": "± 6776421.588435664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3586243.097826087,
            "unit": "ns",
            "range": "± 325593.41198049486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545293.6666666665,
            "unit": "ns",
            "range": "± 244263.12881625575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4769540.892473118,
            "unit": "ns",
            "range": "± 531546.79224655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4587743.247368421,
            "unit": "ns",
            "range": "± 430069.90976121614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22739398.252688173,
            "unit": "ns",
            "range": "± 2832592.8629470714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6782493.420516305,
            "unit": "ns",
            "range": "± 382446.97492928006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918858.7472395834,
            "unit": "ns",
            "range": "± 96448.79611931114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079604.0048828125,
            "unit": "ns",
            "range": "± 17224.715297917843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3113406.3835621844,
            "unit": "ns",
            "range": "± 270475.4792321983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903383.2055165817,
            "unit": "ns",
            "range": "± 55661.764542573444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856553.3750493213,
            "unit": "ns",
            "range": "± 53636.153235690355"
          }
        ]
      }
    ]
  }
}